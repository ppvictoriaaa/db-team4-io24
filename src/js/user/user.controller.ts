import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post("/create")
    createUser(@Body() newUser: CreateUserDto) {
        return this.userService.createUser(newUser);
    }

    @Patch("/update")
    updateUser(@Body() newUser: UpdateUserDto) {
        return this.userService.updateUser(newUser);
    }

    @Delete("/delete/:id")
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(+id);
    }

    @Get(":id")
    getUser(@Param('id') id: string) {
        return this.userService.getUser(+id);
    }
}