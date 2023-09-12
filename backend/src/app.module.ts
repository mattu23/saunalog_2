import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { UsersModule } from './users/users.module';
const ormConfig = require('../ormconfig');
import { SaunalogModule } from './saunalog/saunalog.module';
// import { SaunalogController } from './saunalog/saunalog.controller';
// import { SaunalogService } from './saunalog/saunalog.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  //usersModuleを一旦削除しています
  imports: [TypeOrmModule.forRoot(ormConfig), SaunalogModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
