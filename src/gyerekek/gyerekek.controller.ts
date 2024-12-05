import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { GyerekekService } from './gyerekek.service';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';

@Controller('gyerekek')
export class GyerekekController {
  constructor(private readonly gyerekekService: GyerekekService) {}

  @Post()
  create(@Body() createGyerekekDto: CreateGyerekekDto) {
    return this.gyerekekService.create(createGyerekekDto);
  }

  @Get()
  findAll() {
    return this.gyerekekService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const gyerek = await this.gyerekekService.findOne(+id);
    if(!gyerek){
      throw new NotFoundException("No Child with this id")
    }
    return gyerek
  }
  
 
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGyerekekDto: UpdateGyerekekDto) {
    const csere = await this.gyerekekService.update(+id, updateGyerekekDto)
    if(!csere){
      throw new NotFoundException("No child with this id")
    }
    return csere
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
   const torol = await this.gyerekekService.remove(+id);
   if(!torol){
    throw new NotFoundException("No child with this id")
   }
   return torol
  }
}