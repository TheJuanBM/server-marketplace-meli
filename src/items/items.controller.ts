import { Controller, Get, Param, Query } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getItems(@Query('q') search: string) {
    return this.itemsService.getItems(search);
  }

  @Get(':id')
  getItemById(@Param('id') id: string) {
    return this.itemsService.getItemById(id);
  }
}
