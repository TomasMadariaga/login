import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Topic } from './topic.entity';
import { type } from 'os';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(type=> User, user=> user.comments)
  user: User;

  @ManyToOne(type=>Topic, topic=> topic.comments)
  topic: Topic;
}
