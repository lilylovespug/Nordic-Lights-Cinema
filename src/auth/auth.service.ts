import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService,
    @InjectRepository(User, "users")
    private usersRepository: Repository<User>
    ) {}

  async validateUser(username: string, password: string): Promise<any> {
    // Add your validation logic here
    // For example, you can check if the username and password match a record in your database
    // If the credentials are valid, return the user object
    // Otherwise, return null

    const user = await this.findByUsernameAndPassword(username, password);

    return await this.generateJwt(user);
  }

  async generateJwt(user: User) {
    const payload = { username: user.UserName, sub: user.Id ?? 111 };
    return this.jwtService.sign(payload);
  }

  async findByUsernameAndPassword(username: string, password: string): Promise<User> {
    return this.usersRepository.findOne({ where: { UserName: username, Password: password } });
  }
}