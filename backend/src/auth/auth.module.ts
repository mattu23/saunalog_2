import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import * as session from 'express-session';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, TypeOrmModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(session({
        secret: 'my-secret', // 実際のプロジェクトでは、環境変数から取得するのが安全です。
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: process.env.NODE_ENV === 'production', // 本番環境ではHTTPSを使用する場合にtrueにします。
          httpOnly: true, // クッキーがクライアントサイドのJavaScriptからアクセスできないようにします。
        },
      }))
      .forRoutes('*'); // すべてのルートにセッションを適用します。
  }
}
