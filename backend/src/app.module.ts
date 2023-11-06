import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
const ormConfig = require('../ormconfig');
import { SaunalogModule } from './saunalog/saunalog.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), SaunalogModule, AuthModule,
    ConfigModule.forRoot({ isGlobal: true,})],
  controllers: [],
  providers: [],
})
export class AppModule {}
