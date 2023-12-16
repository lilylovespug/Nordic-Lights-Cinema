import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Cinemas')
export class Cinema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'nvarchar', length: 50 })
  name: string;
}