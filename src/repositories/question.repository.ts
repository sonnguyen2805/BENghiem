import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from 'src/entities/question.entity';

@Injectable()
export class QuestionRepository {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
  ) {}

  async createQuestion(questionData: Partial<Question>): Promise<Question> {
    const question = this.questionRepo.create(questionData);
    return this.questionRepo.save(question);
  }

  async findQuestionsByQuizId(quizId: number): Promise<Question[]> {
    return this.questionRepo.find({ where: { quiz: { id: quizId } } });
  }

  async findQuestionById(questionId: number): Promise<Question | null> {
    return this.questionRepo.findOne({ where: { id: questionId } });
  }
}
