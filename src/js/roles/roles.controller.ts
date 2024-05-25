import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @Post("/create-role")
    createRole(@Body() newRole: CreateRoleDto) {
        return this.rolesService.createRole(newRole.title);
    }

    @Patch("/update-role")
    updateUser(@Body() newRole: UpdateRoleDto) {
        return this.rolesService.updateRole(newRole.id, newRole.title);;
    }

    @Delete("/delete/:id")
    deleteUser(@Param('id') id: string) {
        return this.rolesService.deleteRole(+id);
    }

    @Get(":title")
    getUser(@Param('title') title: string) {
        return this.rolesService.getRole(title);
    }
}