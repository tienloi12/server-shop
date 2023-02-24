import { Body, Controller, Get, Param, Post,ParseIntPipe } from '@nestjs/common';
import { Delete, Put } from '@nestjs/common/decorators';
import { UserService } from 'src/services/user/user.service'
import { CreateUser } from 'src/models/user.model'


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getall() {
      return this.userService.get();
    }
    @Get(':id')
    async findOne(@Param('id',ParseIntPipe) id: number) {
      return this.userService.getbyId(id);
    }
    @Post()
    async create(@Body() createUser: CreateUser) {
      return this.userService.create(createUser);
    }
    @Put('update')
    async updateUser(@Body() data : CreateUser)
    {
      return this.userService.update(data);
    }
    @Delete('delete/:id')
    async deleteUser(@Param('id',ParseIntPipe)id:number){
        return this.userService.delete(id);
    } 
  

}
