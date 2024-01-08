const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzBjZjNhMjBlZGNhZjMxMmIwMjZhZjM1NzhiMTAyOCIsInN1YiI6IjY1OTRmNDQ5NTkwN2RlNDU5OTYzYmZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jIu9EyJ2GTlw8ENNNk9IuC76BKQ_Ii0J4QAWX_-Jo00"
  }
};
const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

fetch(url, options).then((response) =>
  response.json().then((data) => {
    // 데이터를 받아서 카드로 HTML로 붙이게 만듬.
    let movie = data["results"];
    for (let i = 0; i < movie.length; i++) {
      const temp = document.createElement("div");
      temp.innerHTML = `
  <li id="container" class="container" >
  <img 
  id = "image" 
  class = "image" 
  src="https://image.tmdb.org/t/p/w200${movie[i].poster_path}" 
  onclick = "alert('영화 아이디는 ${movie[i].id}입니다.')">
  <h2 class="movieTitle">영화 제목</h2>
    <p class="title"> ${movie[i].title}</p><br>
    <p class="overview"><span>내용</span>: ${movie[i].overview}</p><br>
    <p class="vote_average"><span>별점</span>: ${movie[i].vote_average}</p>
  </li>`;

      document.getElementById("card").append(temp);
    }
  })
);

fetch(url, options).catch((err) => console.error(err));

//검색기능
function serchMovie() {
  const str = document.querySelector(".info").value;
  const checkTitle = document.querySelectorAll(".title");
  for (let i = 0; i < checkTitle.length; i++) {
    const a = checkTitle[i].innerHTML;
    if (!a.toUpperCase().includes(str.toUpperCase())) {
      container[i].style.display = "none";
    } else {
      container[i].style.display = "block";
    }
  }
  event.preventDefault();
}
