import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./quiz.entity";
@Entity('Question')
export class Question {
  @PrimaryGeneratedColumn() // AUTO_INCREMENT cho id
  id: number;

  @Column({ nullable: false })
  quiz_id: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.id, { onDelete: 'CASCADE' }) // Quan hệ ManyToOne với Quiz
  @JoinColumn({ name: 'quiz_id' }) // Map cột quiz_id
  quiz: Quiz;

  @Column({ nullable: false })
  option_a: string;

  @Column({ nullable: false })
  option_b: string;

  @Column({ nullable: false })
  option_c: string;

  @Column({ nullable: false })
  option_d: string;

  @Column({ nullable: false, length: 1 }) // Xác định chiều dài cho char(1)
  answer: string;
}
