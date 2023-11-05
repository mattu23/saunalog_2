import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UserRepository } from '../user.repository';

@Injectable()
export class SessionAuthGuard implements CanActivate {
  constructor(private userRepository: UserRepository) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request.session.userId) {
      const user = await this.userRepository.findOne({ where: { id: request.session.userId } });
      if (user) {
        request.user = user; // リクエストオブジェクトにユーザー情報を追加
        return true;
      }
    }
    return false;
  }
}
