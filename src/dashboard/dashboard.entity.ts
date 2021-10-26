import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Widget } from 'src/widget/widget.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity() 
export class Dashboard {
  @ApiPropertyOptional()
  @PrimaryGeneratedColumn()
  id: string;

  @ApiPropertyOptional()
  @Column()
  userId: string;

  @ApiPropertyOptional()
  @Column({unique: true})
  title: string;

  @ApiPropertyOptional()
  @Column()
  layoutType: string;

  @ApiPropertyOptional()
  @OneToMany(type => Widget, widget => widget.title)
  widgets: Widget;

}