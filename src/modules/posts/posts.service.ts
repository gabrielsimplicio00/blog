import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { Post as PostModel } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PostCreateInput): Promise<PostModel> {
    return this.prisma.post.create({ data });
  }

  async findAll(): Promise<PostModel[]> {
    return this.prisma.post.findMany();
  }

  async findOne(id: Prisma.PostWhereUniqueInput): Promise<PostModel> {
    return this.prisma.post.findUnique({ where: id });
  }

  async update(
    where: Prisma.PostWhereUniqueInput,
    data: Prisma.PostUpdateInput,
  ): Promise<PostModel> {
    return this.prisma.post.update({ data, where });
  }

  async remove(id: Prisma.PostWhereUniqueInput): Promise<PostModel> {
    return this.prisma.post.delete({ where: id });
  }
}
