import {
  Controller,
  Body,
  Post,
  UseGuards,
  Request,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from '../users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body.data);
  }

  @Post('signup')
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }

  @Get('getUser')
  async get(@Request() req) {
    return this.authService.carregarUser(req);
  }

  @Get('findAll')
  async findAll() {
    return await this.authService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const aluno = await this.authService.findOne(id);

    if (!aluno) {
      throw new NotFoundException("This aluno doesn't exist");
    }
    return aluno;
  }
}
