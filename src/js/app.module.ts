import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { User } from './user/user.model';
import { Role } from './roles/roles.model';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "Lab_6",
    models:[User, Role],
    synchronize: true,
    autoLoadModels: true,
  }), UserModule, RolesModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}