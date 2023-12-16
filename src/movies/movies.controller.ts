import { Controller, Request, Post, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Controller('api/movies')
export class MoviesController {
  constructor(
    @InjectRepository(Movie, "movies")
    private movieRepository: Repository<Movie>,
  ) {
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.movieRepository.findOne({ where: { id: id } });
  }
}