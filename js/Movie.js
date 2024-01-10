export class Movie {
  constructor(id, title, path, voteAverage, overview, date, genre_ids) {
    this.id = id;
    this.title = title;
    this.path = path;
    this.voteAverage = voteAverage;
    this.overview = overview;
    this.date = date;
    this.genre_ids = genre_ids;
  }
}
