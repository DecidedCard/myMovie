import { drawMovieList } from "./movie.js";
import { serchMovie } from "./serch.js";

drawMovieList();

const serchInput = document.querySelector("#info");
serchInput.focus();

const form = document.querySelector("#serch");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  serchMovie();
});
