import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ type: 'varchar', length: 50 })
  UserName: string;

  @Column({ type: 'varchar', length: 50 })
  Password: string;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  Name: string;
}