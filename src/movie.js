const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzBjZjNhMjBlZGNhZjMxMmIwMjZhZjM1NzhiMTAyOCIsInN1YiI6IjY1OTRmNDQ5NTkwN2RlNDU5OTYzYmZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jIu9EyJ2GTlw8ENNNk9IuC76BKQ_Ii0J4QAWX_-Jo00"
  }
};
const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const movieList = fetch(url, options).then((response) =>
  response.json().then((data) => {
    let movie = data["results"];
    return movie;
  })
);

const cardList = document.querySelector('#cardList');

const drawMovieList = (list) {
  list.forEach( (movie) => {

  });
}
