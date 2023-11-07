import { Module } from '@nestjs/common';
import { UserController } from './components/user/user.controller';
import { UserService } from './components/user/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
