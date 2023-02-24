import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemService } from './services/item/item.service';
import { UserService } from './services/user/user.service';
import { ItemController } from './controllers/item/item.controller';
import { UserController } from './controllers/user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, ItemController, UserController],
  providers: [AppService, ItemService, UserService],
})
export class AppModule {}
