import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemasModule } from './cinemas/cinemas.module';
import { MoviesModule } from './movies/movies.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      name: 'users',
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '_yxl_Pass@word',
      database: 'NLC_Users',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      options: {
        trustServerCertificate: true,
      }
    }),
    TypeOrmModule.forRoot({
      name: 'orders',
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '_yxl_Pass@word',
      database: 'NLC_Orders',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      options: {
        trustServerCertificate: true,
      }
    }),
    TypeOrmModule.forRoot({
      name: 'movies',
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '_yxl_Pass@word',
      database: 'NLC_Movies',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      options: {
        trustServerCertificate: true,
      }
    }),
    TypeOrmModule.forRoot({
      name: 'cinemas_fi',
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '_yxl_Pass@word',
      database: 'NLC_Cinemas_Fi',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      options: {
        trustServerCertificate: true,
      }
    }),
    TypeOrmModule.forRoot({
      name: 'cinemas_us',
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '_yxl_Pass@word',
      database: 'NLC_Cinemas_Us',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      options: {
        trustServerCertificate: true,
      }
    }),
    CinemasModule,
    MoviesModule,
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
