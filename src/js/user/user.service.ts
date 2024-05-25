import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private rolesService: RolesService) {}

    async createUser(newUser: CreateUserDto): Promise<User> {
        const existUser = await this.userRepository.findOne({where: {
            email: newUser.email
        }})

        if(existUser) {
            throw new BadRequestException("This user is exist");
        }
        

        let existRole = await this.rolesService.getRole("user");

        if (!existRole) {
            existRole = await this.rolesService.createRole("user");
        }

        return await this.userRepository.create({
            email: newUser.email,
            username: newUser.username,
            password: newUser.password,
            roleId: existRole.id 
        });
    }

    async updateUser(newUserData: UpdateUserDto): Promise<User> {
        const existUser = await this.userRepository.findOne({ where: { email: newUserData.email } });

        if (!existUser) {
            throw new NotFoundException("User not found");
        }

        Object.assign(existUser, {
            email: newUserData.email,
            username: newUserData.username,
            password: newUserData.password,
            roleId: newUserData.roleId
        });

        return await existUser.save();
    }

    async deleteUser(userId: number): Promise<string> {
        const existUser = await this.userRepository.findOne({ where: { id: userId } });

        if (!existUser) {
            throw new NotFoundException("User not found");
        }
        await existUser.destroy()

        return `${existUser.username} has been deleted!`;
    }

    async getUser(userId: number): Promise<User> {
        const existUser = await this.userRepository.findOne({ where: { id: userId } });

        if (!existUser) {
            throw new NotFoundException("User not found");
        }

        return existUser;
    }

    

}
