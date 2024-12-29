import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import { AuthDto } from 'src/dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @Post('login')
    async login(@Request() req: Request, @Body() authDto: AuthDto){
        const user = await this.authService.validateUser(authDto);
        if(!user){
            throw new HttpException('Invalid', 404);
        }
        return user;
    }
}
