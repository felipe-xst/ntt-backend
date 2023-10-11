import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [MoviesService]
})
export class MoviesModule {}
