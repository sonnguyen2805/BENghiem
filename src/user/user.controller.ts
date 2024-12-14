import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {CreateUserDto} from './dto/create-user.dto'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    getUser(){
        return  this.userService.getUser();
    }

    @Post()
    createUser(@Body() body: CreateUserDto){
        console.log(body);
        return this.userService.createUser(body);
    }
}
