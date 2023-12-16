// src/orders/order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  userId: number;

  @Column({ type: 'nvarchar', length: 10, nullable: true })
  region: string | null;

  @Column('uuid')
  showId: string;

  @Column('datetimeoffset', { precision: 7 })
  time: Date;

  @Column('int')
  status: number;
}