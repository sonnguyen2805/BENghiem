import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(
    private readonly quizService: QuizService,
  ) {}

  // -------------------------
  // Các API liên quan đến Quiz
  // -------------------------

  // Tạo bài thi mới
  @Post()
  async createQuiz(@Body('title') title: string) {
    return this.quizService.createQuiz(title);
  }

  // Lấy danh sách bài thi
  @Get()
  async getAllQuizzes() {
    return this.quizService.getAllQuizzes();
  }

  // Thêm câu hỏi vào bài thi
  @Post(':id/question')
  async addQuestion(@Param('id') id: number, @Body() questionData: any) {
    return this.quizService.addQuestion(id, questionData);
  }

  // Lấy danh sách câu hỏi trong bài thi
  @Get(':id/questions')
  async getQuestionsByQuiz(@Param('id') id: number) {
    return this.quizService.getQuestionsByQuiz(id);
  }

  // -------------------------
  // Các API liên quan đến Submission
  // -------------------------

  // Nộp bài làm
  @Post(':quizId/submission')
  async submitQuiz(
    @Param('quizId') quizId: number,
    @Body('username') username: string,
    @Body('answers') answers: { questionId: number; answer: string }[],
  ) {
    return this.quizService.submitQuiz(quizId, username, answers);
  }

  // Xem kết quả bài làm
  @Get(':quizId/submission/:submissionId')
  async getSubmissionResult(
    @Param('submissionId') submissionId: number,
  ) {
    return this.quizService.getSubmissionResult(submissionId);
  }
}
