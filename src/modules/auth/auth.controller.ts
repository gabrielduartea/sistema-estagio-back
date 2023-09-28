import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  NotFoundException,
  Res,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }

  @Get('token/:token')
  async get(@Param('token') token: any) {
    try {
      const data: any = await this.jwtService.decode(token);
      const user = await this.authService.carregarUser(data.username);
      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Get('findAll')
  async findAll() {
    return await this.authService.findAll();
  }

  @Get('autenticacao')
  async user(): Promise<any> {
    try {
      const token = localStorage.getItem('jwt');
      const data = await this.jwtService.decode(token);
      const user = await this.authService.findOne(data.sub);
      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
