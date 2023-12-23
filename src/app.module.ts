import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
/*import { AppController } from './app.controller';
import { AppService } from './app.service';*/
import { UsersModule } from './users/users.module';
//* type orm module
import { TypeOrmModule } from '@nestjs/typeorm';
// ? AppModule is the root module of the application
// ? @Module() decorator provides metadata that Nest makes use of to organize the application structure
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0906',
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TasksModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
