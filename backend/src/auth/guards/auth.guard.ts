import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UserRepository } from '../user.repository';

@Injectable()
export class SessionAuthGuard implements CanActivate {
  constructor(private userRepository: UserRepository) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest(); //リクエストオブジェクトを取得
    //セッションにユーザーIDが格納されているかどうかを確認
    if (request.session.userId) {
      const user = await this.userRepository.findOne({ where: { id: request.session.userId } });
      if (user) {
        request.user = user; // リクエストオブジェクトにユーザー情報を追加。これにより、後続のリクエストやコントローラ内でユーザー情報にアクセスできる
        return true;
      }
    }
    return false;
  }
}
