import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Submission } from 'src/entities/submission.entity';

@Injectable()
export class SubmissionRepository {
  constructor(
    @InjectRepository(Submission) private readonly submissionRepo: Repository<Submission>,
  ) {}

  async createSubmission(submissionData: Partial<Submission>): Promise<Submission> {
    const submission = this.submissionRepo.create(submissionData);
    return this.submissionRepo.save(submission);
  }

  async findSubmissionById(submissionId: number): Promise<Submission | null> {
    return this.submissionRepo.findOne({
      where: { id: submissionId },
      relations: ['submissionAnswers', 'submissionAnswers.question', 'quiz'], // Sửa thành 'submissionAnswers'
    });
  }
  

  async updateSubmissionScore(submission: Submission, score: number): Promise<Submission> {
    submission.score = score;
    return this.submissionRepo.save(submission);
  }
}
