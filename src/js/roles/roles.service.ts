import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    async createRole(title: string) {
        const existRole = await this.roleRepository.findOne({where: {title}});

        if(existRole) {
            return existRole;
        }

        return await this.roleRepository.create({
            title
        })
    }

    async updateRole(id: number, title: string) {
        const existRole = await this.roleRepository.findOne({where: {id}});
        const existRoleEr = await this.roleRepository.findOne({where: {title}});

        if(!existRole) {
            throw new NotFoundException("This role not found!");
        }

        if(existRoleEr) {
            throw new BadRequestException("This role is exist!");
        }

        existRole.set('title', title);

        return await existRole.save();
    }

    async deleteRole(id: number) {
        const existRole = await this.roleRepository.findOne({where: {id}});
        
        if(!existRole) {
            throw new NotFoundException("This role not found!");
        }
        await existRole.destroy()

        return `${existRole.title} has been deleted`;
    }

    async getRole(title: string) {
        const existRole = await this.roleRepository.findOne({where: {title}});

        return existRole;
    }
}
