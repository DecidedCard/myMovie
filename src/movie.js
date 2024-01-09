export const drawMovieList = async () => {
  const movieList = await fetchMovieData();

  const cardList = document.querySelector("#cardList");
  cardList.innerHTML = movieList
    .map(
      (movie) => `
    <li id="container" class="container" >
    <img 
    id = "${movie.id}" 
    class = "image" 
    src="https://image.tmdb.org/t/p/w200${movie.poster_path}">
    <h2 class="movieTitle">영화 제목</h2>
      <p class="title"> ${movie.title}</p><br>
      <p class="overview"><span>내용</span>: ${movie.overview}</p><br>
      <p class="vote_average"><span>별점</span>: ${movie.vote_average}</p>
    </li>`
    )
    .join("");

  cardList.addEventListener("click", clickCard);

  function clickCard(event) {
    if (event.target === cardList) return;

    if (event.target.matches(".image")) {
      alert(`영화 id는 ${event.target.id}`);
    }
  }
};

async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzBjZjNhMjBlZGNhZjMxMmIwMjZhZjM1NzhiMTAyOCIsInN1YiI6IjY1OTRmNDQ5NTkwN2RlNDU5OTYzYmZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jIu9EyJ2GTlw8ENNNk9IuC76BKQ_Ii0J4QAWX_-Jo00"
    }
  };
  const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
  const data = await response.json();
  return data.results;
}
