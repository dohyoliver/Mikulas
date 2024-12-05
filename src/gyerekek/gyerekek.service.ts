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
}
