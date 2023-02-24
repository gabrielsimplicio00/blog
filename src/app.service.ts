import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  signUpPage(): string {
    return 'Sign-up page!';
  }
}
