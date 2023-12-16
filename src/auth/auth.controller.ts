import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

interface LoginDto {
  username: string;
  password: string;
}

@Controller('api/auth')
export class AuthController {
  // @UseGuards(AuthGuard('jwt'))

  constructor(private authService: AuthService,
    @InjectRepository(User, "users")
    private usersRepository: Repository<User>) { }

  @Post('login')
  async login(@Request() req: LoginDto) {

    const user = await this.findByUsernameAndPassword(req.username, req.password);
    if(user == null) {
      return {
        data: {
          session: {
            access_token: null
          },
          user: null
        }
      }
    }

    return {
      data: {
        session: {
          access_token: await this.authService.generateJwt(user)
        },
        user
      }
    }
  }

  async findByUsernameAndPassword(username: string, password: string): Promise<User> {
    return this.usersRepository.findOne({ where: { UserName: username, Password: password } });
  }
}