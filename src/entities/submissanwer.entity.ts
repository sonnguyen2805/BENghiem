import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { Submission } from './submission.entity';
  import { Question } from './question.entity';
  
  @Entity('SubmissionAnswer')
  export class SubmissionAnswer {
    @PrimaryGeneratedColumn() // AUTO_INCREMENT cho cột id
    id: number;
  
    @ManyToOne(() => Submission, (submission) => submission.id, { onDelete: 'CASCADE' }) // Quan hệ với Submission
    @JoinColumn({ name: 'submission_id' }) // Map với cột submission_id
    submission: Submission;
  
    @ManyToOne(() => Question, (question) => question.id, { onDelete: 'CASCADE' }) // Quan hệ với Question
    @JoinColumn({ name: 'question_id' }) // Map với cột question_id
    question: Question;
  
    @Column({ nullable: false, length: 1 }) // varchar(1) cho cột answer
    answer: string;
  
    @Column({ nullable: false, type: 'boolean' }) // boolean cho cột is_correct
    is_correct: boolean;
  }
  