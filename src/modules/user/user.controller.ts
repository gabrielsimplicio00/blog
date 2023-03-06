import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';

@Controller('usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async listaUsuarios() {
    return this.userService.listarUsuarios();
  }

  @Get(':id')
  async buscaUsuario(@Param('id') id: string) {
    return this.userService.buscaUsuario({ id: +id });
  }

  @Post()
  async criaUsuario(@Body() usuario: Prisma.UserCreateInput) {
    return this.userService.criaUsuario(usuario);
  }

  @Patch('/:id')
  async editaUsuario(
    @Param('id') id: string,
    @Body() usuarioAtt: Prisma.UserUpdateInput,
  ) {
    return this.userService.editaUsuario({ id: +id }, usuarioAtt);
  }

  @Delete('/:id')
  async deletaUsuario(@Param('id') id: string) {
    return this.userService.deletaUsuario({ id: +id });
  }
}
