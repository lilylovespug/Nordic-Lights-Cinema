import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let app: TestingModule;

  beforeEach(async () => {
    app = await Test.createTestingModule({
      providers: [JwtStrategy, AuthService],
      controllers: [AuthController],
      imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secret: 'abc1234',
          signOptions: { expiresIn: '600m' },
          global: true,
        })
      ],
    }).compile();

    service = app.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('should login', async () => {
      const appController = app.get(AuthController);
      const result = await appController.login({ username: 'test' });
      expect(result?.length ?? 0).toBeGreaterThan(0);
    });
  });
});
