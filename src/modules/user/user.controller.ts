import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';
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
    return this.userService.buscaUsuario(id);
  }

  @Post()
  async criaUsuario(@Body() criaUsuarioDto: any) {
    return this.userService.criaUsuario(criaUsuarioDto);
  }

  @Patch('/:id')
  async editaUsuario(@Param('id') id: string) {
    return this.userService.editaUsuario(id);
  }

  @Delete('/:id')
  async deletaUsuario(@Param('id') id: string) {
    return this.userService.deletaUsuario(id);
  }
}
