import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { UsersModule } from './users/users.module';
import * as ormConfig from '../ormconfig';
import { SaunalogModule } from './saunalog/saunalog.module';
// import { SaunalogController } from './saunalog/saunalog.controller';
// import { SaunalogService } from './saunalog/saunalog.service';

@Module({
  //usersModuleを一旦削除しています
  imports: [TypeOrmModule.forRoot(ormConfig), SaunalogModule],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
