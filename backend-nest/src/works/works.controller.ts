import { Controller, Get, Post, Put, Delete, Body, Param, UploadedFile, UseInterceptors } from '@nestjs/common';
import { WorksService, Work } from './works.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Post()
  createWork(@Body() workDto: Partial<Work>): Work {
    return this.worksService.createWork(workDto);
  }

  @Get()
  getAllWorks(): Work[] {
    return this.worksService.getAllWorks();
  }

  @Put(':id')
  updateWork(@Param('id') id: number, @Body() workDto: Partial<Work>): Work | null {
    return this.worksService.updateWork(id, workDto);
  }

  @Delete(':id')
  deleteWork(@Param('id') id: number): Work | null {
    return this.worksService.deleteWork(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Date.now() + extname(file.originalname);
        cb(null, randomName);
      }
    })
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('File uploaded:', file);
    return { path: `uploads/${file.filename}` };
  }
}
