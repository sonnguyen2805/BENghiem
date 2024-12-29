import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubmissionAnswer } from 'src/entities/submissanwer.entity';

@Injectable()
export class SubmissionAnswerRepository {
  constructor(
    @InjectRepository(SubmissionAnswer)
    private readonly submissionAnswerRepo: Repository<SubmissionAnswer>,
  ) {}

  async createSubmissionAnswer(answerData: Partial<SubmissionAnswer>): Promise<SubmissionAnswer> {
    const submissionAnswer = this.submissionAnswerRepo.create(answerData);
    return this.submissionAnswerRepo.save(submissionAnswer);
  }
}
