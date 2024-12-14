import { Body, Get, Injectable } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto'

export interface User {
    id: number;
    name: string;
    email: string;
    password: string
}

@Injectable()
export class UserService {
    private users: User[] = [
        {
        id: 1,
        name: 'Son',
        email: '1asdad@gmail.com',
        password: '123'
        }
    ]
    getUser(){
        return this.users;
    }
    createUser(body: CreateUserDto){
        const newUser: User = {
            id: Date.now(),
            ...body
        }
        this.users.push(newUser)
        return this.users
    }
}
