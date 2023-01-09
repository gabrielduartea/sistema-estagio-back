import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(username);
    if (user) {
      const password = user.password;
      const acesso = {
        validate: await this.comparePassword(pass, password),
        usuario: user,
      };
      return acesso;
    }
    return null;
  }

  async login(user: any) {
    const validate = await this.validateUser(user.email, user.password);
    if (validate) {
      const payload = { username: user.username, sub: user.userId };
      return {
        access_token: this.jwtService.sign(payload),
        user: validate.usuario,
      };
    } else {
      throw new UnauthorizedException();
    }
  }

  public async create(user) {
    const pass = await this.hashPassword(user.password);

    const newUser = await this.usersService.create({ ...user, password: pass });

    const { password, ...result } = newUser['dataValues'];

    const token = await this.generateToken(result);

    return { user: result, token };
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }

  public async carregarUser(email) {
    const user = await this.usersService.findOneByEmail(email);
    return user;
  }

  public async findAll() {
    return await this.usersService.findAll();
  }

  public async findOne(id) {
    const user = await this.usersService.findOneById(id);
    return user;
  }
}
