import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Shows')
export class Show {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  cinemaId: string;

  @Column('uuid')
  movieId: string;

  @Column({ type: 'datetimeoffset', precision: 7 })
  startTime: Date;

  @Column({ type: 'int' })
  duration: number;
}