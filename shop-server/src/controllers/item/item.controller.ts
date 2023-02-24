import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post,ParseIntPipe } from '@nestjs/common';
import { Delete, Put } from '@nestjs/common/decorators';
import { Item } from 'src/models/item.model';
import { ItemService } from 'src/services/item/item.service';

@Controller('item')
export class ItemController {
    constructor(private readonly itemService : ItemService) { }



    @Get()
  async getallItem() {
    return this.itemService.get();
  }
  @Get(':id')
  async findItemById(@Param('id',ParseIntPipe) id: number) {
    return this.itemService.getbyId(id);
  }
  @Post()
  async createItem(@Body() createItem: Item) {
    return this.itemService.create(createItem);
  }
  @Put('update')
  async updateItem(@Body() data : Item)
  {
    return this.itemService.update(data);
  }
  @Delete('delete/:id')
  async deleteItem(@Param('id',ParseIntPipe)id:number){
      return this.itemService.delete(id);
  } 
}
