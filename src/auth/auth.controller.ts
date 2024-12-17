import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { AuthProxyService } from './auth.service';
import { LoginDto, RegisterDto } from './auth.interface';
import { AuthGuard } from './auth.guard';


@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthProxyService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Get('user')
  @UseGuards(AuthGuard)
  async getUser(@Query('id') id: string) {
    return this.authService.getUser(id);
  }

  @Post('reset-password')
  async resetPassword(@Body('email') email: string) {
    return this.authService.resetPassword(email);
  }
}