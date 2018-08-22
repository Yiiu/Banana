import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article extends BaseEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public html: string;

  @Column()
  public markdown: string;

}
