import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';
import { MoviesService } from './movies/movies.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [MoviesModule, HttpModule],
  controllers: [AppController, MoviesController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
