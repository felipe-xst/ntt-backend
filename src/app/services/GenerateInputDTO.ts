export default class GenerateInputDTO {
  title: string;
  plot: string;
  actors: string;
  genre: string;
  awards: string;
  director: string;
  writer: string;
  language: string;
  country: string;
  year: string;
  released: string;
  runtime: string;
  poster: string;
  ratings: any[];

  constructor({
    Actors, Title, Awards, Plot, Genre, Director, Writer, Language, Country, Year, Released, Runtime, Poster, Ratings
  }: {
    Actors: string, Title: string, Awards: string, Plot: string, Genre: string, Director: string, Writer: string, Language: string, Country: string, Year: string, Released: string, Runtime: string, Poster: string, Ratings: []
  }) {

    this.title = Title;
    this.plot = Plot;
    this.actors = Actors;
    this.genre = Genre;
    this.awards = Awards;
    this.director = Director;
    this.writer = Writer;
    this.language = Language;
    this.country = Country;
    this.year = Year;
    this.released = Released;
    this.runtime = Runtime;
    this.poster = Poster;
    this.ratings = Ratings;

  }
}