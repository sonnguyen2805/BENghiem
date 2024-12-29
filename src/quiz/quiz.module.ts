import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizRepository } from '../repositories/quiz.repository';
import { QuestionRepository } from '../repositories/question.repository';
import { SubmissionRepository } from '../repositories/submission.repository';
import { SubmissionAnswerRepository } from '../repositories/submission-answer.repository';
import { Quiz } from 'src/entities/quiz.entity';
import { Question } from 'src/entities/question.entity';
import { Submission } from 'src/entities/submission.entity';
import { SubmissionAnswer } from 'src/entities/submissanwer.entity';
// import { SubmissionController } from './submission.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quiz, Question, Submission, SubmissionAnswer]),
  ],
  controllers: [QuizController],
  providers: [
    QuizService,
    QuizRepository,
    QuestionRepository, // Thêm QuestionRepository vào providers
    SubmissionRepository,
    SubmissionAnswerRepository,
  ],
})
export class QuizModule {}
