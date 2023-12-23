import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async getAllUsers(url: string): Promise<User[]> {
    const userFromDB = await this.usersRepository.find();
    console.log(url ?? 'url is undefined');
    console.log(userFromDB ?? 'userFromDB is undefined');
    return userFromDB;
  }
  getUserById(id: number): string {
    // Aquí va la lógica para obtener un usuario por id
    console.log(id ?? 'id is undefined');
    return 'get user by id';
  }

  async createUser(name: string, email: string): Promise<any> {
    // Aquí va la lógica para crear un usuario
    const newUser = this.usersRepository.create({ name, email });
    const userResponse = await this.usersRepository.save(newUser);

    console.log(name ?? 'name is undefined');
    console.log(email ?? 'email is undefined');
    console.log(userResponse ?? 'userResponse is undefined');
    return userResponse;
  }
}
