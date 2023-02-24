import { Injectable } from '@nestjs/common';
import {CreateUser} from 'src/models/user.model'
@Injectable()
export class UserService {
    listUser : CreateUser[] =[
        {
          id : 1,
          username : 'loivt',
          password : 'loivt123',
          email: 'loivt123@gmail.com'
        },
        {
          id : 2,
          username : 'huongptt',
          password : 'huongptt1411',
          email: 'huongptt1411@gmail.com'
        },
        {
          id : 3,
          username : 'tienvt',
          password : 'tienvt1811',
          email: 'tienvt1811@gmail.com'
        }
    
      ]
      get() {
        return this.listUser;
      }
      create(users:CreateUser)
      {
        return this.listUser.push(users);
      }
      getbyId(id : number)
      {
          return this.listUser.find(listUser => listUser.id === id)
      }
      update (updateUser: CreateUser)
      {
        const index = this.listUser.findIndex(listUser => listUser.id === updateUser.id)
        this.listUser[index] = updateUser;
      }
      delete(id : number)
      {
        const index = this.listUser.findIndex(listUser => listUser.id === id)
        if(index)
        {
            return 'Khong tim thay';
        }
        this.listUser.splice(index,1);
      }


}
