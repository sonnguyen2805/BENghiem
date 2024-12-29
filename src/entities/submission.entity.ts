import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Quiz } from './quiz.entity';
import { SubmissionAnswer } from './submissanwer.entity';

@Entity('submission')
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Quiz, { onDelete: 'CASCADE' })
  quiz: Quiz;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  score: number;

  @OneToMany(() => SubmissionAnswer, (submissionAnswer) => submissionAnswer.submission)
  submissionAnswers: SubmissionAnswer[]; // Tên thuộc tính đúng
}
