import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cinema } from './entities/cinema.entity';
import { Show } from './entities/shows.entity';
import { CinemasController } from './cinemas.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cinema, Show], "cinemas_fi"),
    TypeOrmModule.forFeature([Cinema, Show], "cinemas_us")
  ],
  controllers: [CinemasController],
  providers: [],
  exports: [],
})
export class CinemasModule {}