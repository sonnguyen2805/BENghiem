import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Question } from './question.entity';
import { Submission } from './submission.entity';

@Entity('Quiz')
export class Quiz {
  @PrimaryGeneratedColumn() // Thích hợp cho cột AUTO_INCREMENT
  id: number;

  @Column({ nullable: false })
  title: string;

  @OneToMany(()=>Question, (question)=>question.quiz)
  questions: Question[];
  @OneToMany(() => Submission, (submission) => submission.quiz) // Quan hệ một - nhiều
  submissions: Submission[];
}


