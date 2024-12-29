import { Injectable } from '@nestjs/common';
import { QuizRepository } from '../repositories/quiz.repository';
import { QuestionRepository } from '../repositories/question.repository';
import { SubmissionRepository } from '../repositories/submission.repository';
import { SubmissionAnswerRepository } from '../repositories/submission-answer.repository';
import { Question } from 'src/entities/question.entity';

@Injectable()
export class QuizService {
  constructor(
    private readonly quizRepository: QuizRepository,
    private readonly questionRepository: QuestionRepository,
    private readonly submissionRepository: SubmissionRepository,
    private readonly submissionAnswerRepository: SubmissionAnswerRepository,
  ) {}

  async createQuiz(title: string) {
    return this.quizRepository.createQuiz(title);
  }

  async getAllQuizzes() {
    return this.quizRepository.getAllQuizzes();
  }

  async addQuestion(quizId: number, questionData: Partial<Question>) {
    const quiz = await this.quizRepository.findQuizById(quizId);
    if (!quiz) throw new Error('Quiz not found');
    return this.questionRepository.createQuestion({ ...questionData, quiz });
  }

  async getQuestionsByQuiz(quizId: number) {
    return this.questionRepository.findQuestionsByQuizId(quizId);
  }

  async submitQuiz(
    quizId: number,
    username: string,
    answers: { questionId: number; answer: string }[],
  ) {
    const quiz = await this.quizRepository.findQuizById(quizId);
    if (!quiz) throw new Error('Quiz not found');

    const submission = await this.submissionRepository.createSubmission({
      quiz,
      username,
      score: 0,
    });

    let totalScore = 0;

    for (const { questionId, answer } of answers) {
      const question =
        await this.questionRepository.findQuestionById(questionId);
      if (!question) continue;

      const isCorrect = question.answer === answer;
      totalScore += isCorrect ? 1 : 0;

      await this.submissionAnswerRepository.createSubmissionAnswer({
        submission,
        question,
        answer,
        is_correct: isCorrect,
      });
    }

    return this.submissionRepository.updateSubmissionScore(
      submission,
      totalScore,
    );
  }

  async getSubmissionResult(submissionId: number) {
    const submission =
      await this.submissionRepository.findSubmissionById(submissionId);
    if (!submission) throw new Error('Submission not found');

    return {
      username: submission.username,
      quizId: submission.quiz.id,
      score: submission.score,
    };
  }
}
