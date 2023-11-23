    // a)Constructor for the class movie
class Movie {
    title: string;
    studio: string;
    rating: string;
  
    //b) Constructor with default rating "PG"
    constructor(title: string, studio: string, rating: string = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  // c)Method to filter movies with a rating of "PG"
  function getPG(movies: Movie[]): Movie[] {
    return movies.filter(movie => movie.rating === "PG");
  }
  
  // d) Code for the class movie Casino Royale
  const movies: Movie[] = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3"), // Rating defaults to "PG"
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
  ];
  
  const pgMovies: Movie[] = getPG(movies);
  
  console.log(pgMovies)