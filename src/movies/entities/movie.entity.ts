import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Movies')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'nvarchar', length: 50 })
  name: string;

  @Column({ type: 'nvarchar', length: 300 })
  cover: string;

  @Column({ type: 'nvarchar', length: 4000 })
  description: string;
}