import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  async getAllUsers(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    try {
      const URL = req.url;
      const data = await this.usersService.getAllUsers(URL);
      return res.status(HttpStatus.OK).json({
        message: 'All users',
        data,
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'There was a problem getting users',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/:id')
  getUserById(@Req() req: Request): Response | string {
    const { id } = req.params;
    return this.usersService.getUserById(+id);
  }

  @Post()
  async createUser(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response | string> {
    const { name, email } = req.body;
    const user = await this.usersService.createUser(name, email);
    console.log(user);
    return res.status(201).json({
      message: 'User created successfully',
      user,
    });
  }
}
