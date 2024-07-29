import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { Task } from './task/entities/task.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'db_dev_infra_mysql',
      entities: [ Task ],
      synchronize: true,
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
}) 
export class AppModule {}
