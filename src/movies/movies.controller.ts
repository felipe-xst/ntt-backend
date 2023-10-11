import { Controller, Get, Req } from '@nestjs/common';
import { MoviesService } from './movies.service';
import GenerateInputDTO from 'src/app/services/GenerateInputDTO';

@Controller('')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}
  
  
  @Get('/api/v1/movies')
  async getMovie(@Req() req) {

    try {

      const movie = await this.movieService.findMovie(req.query.title);
      if (movie.Error) {
        return movie.Error
      }
      const generateInputDTO = new GenerateInputDTO({
        Actors: movie.Actors,
        Title: movie.Title,
        Awards: movie.Awards,
        Plot: movie.Plot,
        Genre: movie.Genre,
        Director: movie.Director,
        Writer: movie.Writer,
        Language: movie.Language,
        Country: movie.Country,
        Year: movie.Year,
        Released: movie.Released,
        Runtime: movie.Runtime,
        Poster: movie.Poster,
        Ratings: movie.Ratings
      })

      return generateInputDTO
    } catch (error) {
      return error
    }
  }

}
