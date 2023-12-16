
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { AuthGuard } from '@nestjs/passport';
import { Cinema } from 'src/cinemas/entities/cinema.entity';
import { Show } from 'src/cinemas/entities/shows.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import { v4 as uuidv4 } from 'uuid';

interface FullOrder extends Order {
  cinema: Cinema;
  show: Show;
  movie: Movie;
}

interface CreateOrderDto {
  region: string;
  showId: string;
  movieId: string;
}

@Controller('api/orders')
export class OrdersController {
  constructor(
    @InjectRepository(Order, 'orders')
    private orderRepository: Repository<Order>,
    @InjectRepository(Cinema, "cinemas_fi")
    private fiCinemaRepository: Repository<Cinema>,
    @InjectRepository(Cinema, "cinemas_us")
    private usCinemaRepository: Repository<Cinema>,
    @InjectRepository(Show, "cinemas_fi")
    private fiShowRepository: Repository<Show>,
    @InjectRepository(Show, "cinemas_us")
    private usShowRepository: Repository<Show>,
    @InjectRepository(Movie, "movies")
    private movieRepository: Repository<Movie>,
  ) { }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getById(@Param('id') id: string, @Req() req) {
    const user = req.user;
    return this.orderRepository.findOne({ where: { id: id, userId: user.id } });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('lite')
  get(@Req() req) {
    console.log({ user: req.user });
    return this.orderRepository.find({ where: { userId: req.user.userId } });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getFullOrders(@Req() req) {
    console.log({ user: req.user });
    const orders = await this.orderRepository.find({ where: { userId: req.user.userId } });

    const fullOrders: FullOrder[] = [];
    for (const order of orders) {
      const cinemaRepository: Repository<Cinema> = order.region === 'fi' ? this.fiCinemaRepository : this.usCinemaRepository;
      const showRepository: Repository<Show> = order.region === 'fi' ? this.fiShowRepository : this.usShowRepository;

      const show = await showRepository.findOne({ where: { id: order.showId } });
      const cinema = await cinemaRepository.findOne({ where: { id: show.cinemaId } });
      const movie = await this.movieRepository.findOne({ where: { id: show.movieId } });

      fullOrders.push({
        ...order,
        cinema,
        show,
        movie,
      });
    }

    return fullOrders;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  createOrder(@Body() dto: CreateOrderDto, @Req() req: any) {

    const order: Order = {
      region: dto.region,
      showId: dto.showId,
      id: uuidv4(),
      status: 0,
      userId: req.user.userId,
      time: new Date()
    }
    console.log({ order, dto, x: req.body });

    return this.orderRepository.save(order);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Query('status') status: number) {
    console.log({ id, status })
    return this.orderRepository.update({ id: id }, { status: status });
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.orderRepository.delete({ id: id });
  }
}