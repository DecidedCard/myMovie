const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzBjZjNhMjBlZGNhZjMxMmIwMjZhZjM1NzhiMTAyOCIsInN1YiI6IjY1OTRmNDQ5NTkwN2RlNDU5OTYzYmZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jIu9EyJ2GTlw8ENNNk9IuC76BKQ_Ii0J4QAWX_-Jo00",
  },
};
const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

fetch(url, options).then((response) =>
  response.json().then((data) => {
    let movie = data["results"];
    for (let i = 0; i < movie.length; i++) {
      const temp = document.createElement("div");
      temp.innerHTML = `
  <div id="container" class="container" >
<div class="top">
<img id = "image" src="https://image.tmdb.org/t/p/w200${movie[i].poster_path}" onclick = "checkId(${movie[i].id})">
  </div>
  <div class="bottom">
    <div class="title">영화제목: ${movie[i].title}</div>
    <div class="overview">내용: ${movie[i].overview}</div>
    <div class="vote_average">별점: ${movie[i].vote_average}</div>
  </div>
</div>`;

      document.getElementById("card").append(temp);
    }
  })
);

function checkId(num) {
  alert("영화 id : " + num);
}

function serchMovie() {
  let str = document.getElementById("info").value;
  let checkCard = document.getElementsByClassName("container");
  let checkTitle = document.getElementsByClassName("title");
  for (let i = 0; i < checkCard.length; i++) {
    let a = checkTitle[i].innerHTML;
    if (!a.includes(str)) {
      container[i].style.display = "none";
    } else {
      container[i].style.display = "block";
    }
  }
}

fetch(url, options).catch((err) => console.error(err));
