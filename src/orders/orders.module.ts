import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrdersController } from './orders.controller';
import { Cinema } from 'src/cinemas/entities/cinema.entity';
import { Show } from 'src/cinemas/entities/shows.entity';
import { Movie } from 'src/movies/entities/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order], "orders"),
    TypeOrmModule.forFeature([Cinema, Show], "cinemas_fi"),
    TypeOrmModule.forFeature([Cinema, Show], "cinemas_us"),
    TypeOrmModule.forFeature([Movie], "movies")
  ],
  controllers: [OrdersController],
  providers: [],
  exports: [],
})
export class OrdersModule {}