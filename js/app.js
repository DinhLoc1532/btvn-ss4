import FilmContainer from "./FilmContainer.js";
import FilmList from "./FilmList.js";
import data from "./data.js";

let $filmList = document.getElementById("my-list");
$filmList.setAttribute("films", JSON.stringify(data));
