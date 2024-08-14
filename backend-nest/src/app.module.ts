import { Module } from '@nestjs/common';
import { WorksController } from './works/works.controller';
import { WorksService } from './works/works.service';

@Module({
  imports: [],
  controllers: [WorksController],
  providers: [WorksService],
})
export class AppModule {}
