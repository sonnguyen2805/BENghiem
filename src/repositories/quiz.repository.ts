import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from 'src/entities/quiz.entity';

@Injectable()
export class QuizRepository {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepo: Repository<Quiz>,
  ) {}

  async createQuiz(title: string): Promise<Quiz> {
    const quiz = this.quizRepo.create({ title });
    return this.quizRepo.save(quiz);
  }

  async getAllQuizzes(): Promise<Quiz[]> {
    return this.quizRepo.find({ relations: ['questions'] });
  }

  async findQuizById(quizId: number): Promise<Quiz | null> {
    return this.quizRepo.findOne({
      where: { id: quizId },
      relations: ['questions'],
    });
  }
}
