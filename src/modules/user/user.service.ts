import { Injectable } from '@nestjs/common/decorators';
import { Prisma } from '@prisma/client';
import { User as UserModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async listarUsuarios(): Promise<UserModel[]> {
    return this.prisma.user.findMany();
  }

  async buscaUsuario(id: Prisma.UserWhereUniqueInput): Promise<UserModel> {
    return this.prisma.user.findUnique({ where: id });
  }

  async criaUsuario(data: Prisma.UserCreateInput): Promise<UserModel> {
    return this.prisma.user.create({ data });
  }

  async editaUsuario(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    return this.prisma.user.update({ data, where });
  }

  async deletaUsuario(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where });
  }
}
