interface IMovieInfo {
  Poster: string
  Title: string
  Type: string
  Year: number
  imdbID: string
}

export interface IMovieAPIRes {
  Search: IMovieInfo[]
  totalResults: string
  Response: string
}
