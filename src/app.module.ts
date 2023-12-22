import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
/*import { AppController } from './app.controller';
import { AppService } from './app.service';*/

// ? AppModule is the root module of the application
// ? @Module() decorator provides metadata that Nest makes use of to organize the application structure
@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
