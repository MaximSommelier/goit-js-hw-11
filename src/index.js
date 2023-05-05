import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';


form = document.querySelector(".search-form");
gallery = document.querySelector(".gallery");
btnLoadMore = document.querySelector(".load-more");
// const pictureName = evt.target.value.trim();
const API_KEY = "35723548-55cce6d92fe2b0376e8aa06a2";



function getPictures(pictureName, page) {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${pictureName}
    &image_type="photo"&orientation="horizontal"&safesearch="true"&per_page=40&page=${page}`;
  return fetch(URL).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  }).then(data => console.log(data));
}
getPictures("cat", 3);

// let counter = 0;

// function createMarkup(arr){
//     return arr.filter(item => {
//         counter +=1
//         if(counter > 500){
//             return false
//         }

//         return `li`

//     })
// }

function createMarkup({ webformatURL, largeImageURL, tags, like, views, comments, downloads }) {
  return (`<div class="photo-card">
  <img src="${largeImageURL}" alt="${webformatURLtags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>:${like}
    </p>
    <p class="info-item">
      <b>Views</b>:${views}
    </p>
    <p class="info-item">
      <b>Comments</b>:${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>:${downloads}
    </p>
  </div>
</div>`)
.join("");

gallery.insertAdjacementHTML("beforeend", createMarkup)
}