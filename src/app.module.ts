import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Quiz} from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Submission } from './entities/submission.entity';
import { SubmissionAnswer } from './entities/submissanwer.entity';
// import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql.freedb.tech',
      port: 3306,
      username: 'freedb_iroman28041',
      password: '6wPYa9M&W%q&UBE',
      database: 'freedb_QuizTest',
      entities: [Quiz, Question, Submission, SubmissionAnswer],
      logging: true,
      synchronize: true,
    }),
    QuizModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
