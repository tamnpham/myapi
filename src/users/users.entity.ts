import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  username: string;

  @ApiProperty()
  @Column({unique: true})
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column()
  fullname: string;

}