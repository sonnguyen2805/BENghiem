import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from 'src/dto/auth.dto';

const fakeUser =[
    {
        id: 1,
        username: 'nguyenson',
        password: '12381'
    },
    {
        id: 2,
        username: 'namhoangtran',
        password: '1231'
    }
];

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){}
    validateUser({username, password}: AuthDto){
        const findUser = fakeUser.find((user)=>user.username === username);
        if(!findUser) return null;
        
        if(password === findUser.password){
            const {password, ...user} = findUser;
            return{
                data: user,
                token: this.jwtService.sign(user)
            };
        }
    }
}
