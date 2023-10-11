import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
// import { Observable } from 'rxjs';
// import { AxiosResponse } from 'axios';

@Injectable()
export class MoviesService {
  constructor(private readonly httpService: HttpService) {}

  async findMovie(title) {
    const result = await lastValueFrom(this.httpService.get(`https://www.omdbapi.com/?i=tt3896198&apikey=8fc2b7af&t=${title}`))
    return result.data
}

  getMovies(): string {
    return 'moveis serives!';
  }


}
