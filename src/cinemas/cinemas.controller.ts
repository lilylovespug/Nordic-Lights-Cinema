import { Controller, Request, Post, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cinema } from './entities/cinema.entity';
import { Show } from './entities/shows.entity';

@Controller('api/cinemas')
export class CinemasController {
  constructor(
    @InjectRepository(Cinema, "cinemas_fi")
    private fiCinemaRepository: Repository<Cinema>,
    @InjectRepository(Cinema, "cinemas_us")
    private usCinemaRepository: Repository<Cinema>,
    @InjectRepository(Show, "cinemas_fi")
    private fiShowRepository: Repository<Show>,
    @InjectRepository(Show, "cinemas_us")
    private usShowRepository: Repository<Show>) { 
    }

  @Get(':country')
  getCinemasByCountry(@Param('country') country: string) {
    // Logic to load cinemas by country
    if (country === 'fi') {
      return this.fiCinemaRepository.find();
    } else if (country === 'us') {
      return this.usCinemaRepository.find();
    } else {
      return [];
    }
  }

  // Load shows by country and cinemaID.
  @Get(':country/:cinemaId/shows')
  getShowsByCinema(@Param('country') country: string, @Param('cinemaId') cinemaId: string) {
    
    const repository: Repository<Show> = country === 'fi' ? this.fiShowRepository : this.usShowRepository;
    return repository.find({ where: { cinemaId: cinemaId } });
  }
}