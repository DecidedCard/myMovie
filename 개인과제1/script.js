const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzBjZjNhMjBlZGNhZjMxMmIwMjZhZjM1NzhiMTAyOCIsInN1YiI6IjY1OTRmNDQ5NTkwN2RlNDU5OTYzYmZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jIu9EyJ2GTlw8ENNNk9IuC76BKQ_Ii0J4QAWX_-Jo00",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
).catch((err) => console.error(err));

const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

fetch(url).then((response) =>
  response.json().then((data) => {
    let movie = data["results"];
    console.log(movie);
    for (let i = 0; i < movie.length; i++) {
      const temp = document.createElement("div");
      temp.innerHTML = `
  <div class="container">
  <div class="top"><img src="https://image.tmdb.org/t/p/w200${movie[i].poster_path}"></div>
  <div class="bottom">
    <div class="title">${movie[i].title}</div>
    <div class="overview">${movie[i].overview}</div>
    <div class="vote_average">${movie[i].vote_average}</div>
  </div>
</div>`;

      document.getElementById("card").append(temp);
    }
  })
);
