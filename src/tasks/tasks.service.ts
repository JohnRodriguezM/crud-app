import { Injectable } from '@nestjs/common';

// ? @Injectable() decorator marks a class as a provider
// ? Providers can be injected into other classes as dependencies
// ? Nest will create a fresh instance of the TasksService class
// ? and inject it into the TasksController when it is requested
// ? services are like utilities that can be used in different parts of the application
// ? services can be injected into other services as well

@Injectable()
export class TasksService {}
