import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { MoviesController } from './movies.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie], "movies")
  ],
  controllers: [MoviesController],
  providers: [],
  exports: [],
})
export class MoviesModule {}