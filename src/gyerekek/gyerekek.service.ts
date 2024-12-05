import { Injectable } from '@nestjs/common';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GyerekekService {
  constructor (private readonly db: PrismaService){}
 
  create(createGyerekekDto: CreateGyerekekDto) {
    return this.db.gyerekek.create({
      data: createGyerekekDto
    });
  }

  findAll() {
    return this.db.gyerekek.findMany();
  }
  
 
  findOne(id: number) {
    return this.db.gyerekek.findUnique({where: {id}});
  }

 async update(id: number, updateGyerekekDto: UpdateGyerekekDto) {
  try{
    return await this.db.gyerekek.update({
     data: updateGyerekekDto,
     where: {id}
   });
 }catch{
   return undefined;
 }
  }

  async remove(id: number) {
    try{
      await this.db.gyerekek.delete({
        where: {id}
      })
      return true
    }catch{
      return false
    }
  }

  async addToyToChild(gyerekId: number, jatekId: number) {
    try {
      const gyerek = await this.db.gyerekek.findUnique({
        where: { id: gyerekId },
        include: { jatekok: true },
      });
  
      const jatek = await this.db.jatekok.findUnique({
        where: { id: jatekId },
      });
  
      if (!gyerek || !jatek) {
        return null;
      }
  
      await this.db.gyerekek.update({
        where: { id: gyerekId },
        data: {
          jatekok: {
            connect: { id: jatekId },
          },
        },
      });
  
      return true;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  async removeToyFromChild(gyerekId: number, jatekId: number) {
    try {
      const gyerek = await this.db.gyerekek.findUnique({
        where: { id: gyerekId },
        include: { jatekok: true },
      });
  
      const jatek = await this.db.jatekok.findUnique({
        where: { id: jatekId },
      });
  
      if (!gyerek || !jatek) {
        return null;
      }
  
      await this.db.gyerekek.update({
        where: { id: gyerekId },
        data: {
          jatekok: {
            disconnect: { id: jatekId },
          },
        },
      });
  
      return true;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
