import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Setting extends BaseEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public subtitle: string;

  @Column()
  public description: number;

  @Column()
  public author: number;

}
