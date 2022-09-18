import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }
}
