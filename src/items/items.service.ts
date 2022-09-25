import { Injectable } from '@nestjs/common';
import { endpoints } from 'src/config';
import { AxiosAdapter } from '../common/adapters';
import {
  Author,
  Categories,
  Item,
  ItemsResponse,
  ResultDetail,
  ResultDetailFetch,
} from './interfaces';

@Injectable()
export class ItemsService {
  constructor(private readonly http: AxiosAdapter) {}

  private readonly author: Author = { name: 'Juan Pablo', lastname: 'Bedoya' };

  async getDescriptionById(id: string) {
    const description = await this.http.get<{ plain_text: string }>(
      `${endpoints.description(id)}`,
    );

    return description.plain_text;
  }

  async getCategoryById(categoryId: string) {
    const { path_from_root } = await this.http.get<Categories>(
      `${endpoints.category(categoryId)}`,
    );

    return path_from_root;
  }

  async getItems(search: string) {
    try {
      const { results, filters } = await this.http.get<ItemsResponse>(
        `${endpoints.search(search)}`,
      );

      const items: Item[] = [];

      results.map((item) => {
        items.push({
          id: item.id,
          title: item.title,
          picture: item.thumbnail,
          condition: item.condition,
          address: item.address.city_name,
          free_shipping: item.shipping.free_shipping,

          price: {
            amount: item.prices.prices[0].amount,
            currency: item.prices.prices[0].currency_id,
          },
        });
      });

      const categories = filters[0]?.values[0]?.path_from_root.map(
        ({ name }) => name,
      );

      return { author: this.author, categories, items };
    } catch (error) {
      return { author: this.author, items: [] };
    }
  }

  async getItemById(id: string) {
    const description = await this.getDescriptionById(id);

    const itemDetail = await this.http.get<ResultDetailFetch>(
      `${endpoints.detail(id)}`,
    );

    const categories = await this.getCategoryById(itemDetail.category_id);

    const formatResult: ResultDetail = {
      id: itemDetail.id,
      title: itemDetail.title,
      price: {
        amount: itemDetail.price,
        currency: itemDetail.currency_id,
      },
      picture: itemDetail.secure_thumbnail,
      condition: itemDetail.condition,
      sold_quantity: itemDetail.sold_quantity,
      free_shipping: itemDetail.shipping.free_shipping,
      categories: categories.map(({ name }) => name),
      description,
    };

    return { author: this.author, item: formatResult };
  }
}
