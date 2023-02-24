import { Injectable } from '@nestjs/common';
import { Item } from 'src/models/item.model';

@Injectable()
export class ItemService {
    listItem : Item[] =[
        {
          id : 1,
          title : 'Ao khoac',
          image : 'https://tse4.mm.bing.net/th?id=OIP.wbql042fUciCuZLL3YsEoAHaHa&pid=Api&P=0',
          description: 'Ao khoac re dep'
        },
        {
          id : 2,
          title : 'Ao khoac',
          image : 'https://tse4.mm.bing.net/th?id=OIP.wbql042fUciCuZLL3YsEoAHaHa&pid=Api&P=0',
          description: 'Ao khoac re dep'
        },
        {
          id : 3,
          title : 'Ao khoac',
          image : 'https://tse4.mm.bing.net/th?id=OIP.wbql042fUciCuZLL3YsEoAHaHa&pid=Api&P=0',
          description: 'Ao khoac re dep'
        }
    
    ]
      get() {
        return this.listItem;
      }
      create(items : Item)
      {
        return this.listItem.push(items);
      }
      getbyId(id : number)
      {
          return this.listItem.find(listItem => listItem.id === id)
      }
      update (updateItem: Item)
      {
        const index = this.listItem.findIndex(listItem => listItem.id === updateItem.id)
        this.listItem[index] = updateItem;
      }
      delete(id : number)
      {
        const index = this.listItem.findIndex(listItem => listItem.id === id)
        if(index)
        {
            return 'Khong tim thay san pham';
        }
        this.listItem.splice(index,1);
      }


}
