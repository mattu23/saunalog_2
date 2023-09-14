import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
const ormConfig = require('../ormconfig');
import { SaunalogModule } from './saunalog/saunalog.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), SaunalogModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
