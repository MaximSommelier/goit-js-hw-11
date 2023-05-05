import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";


form = document.querySelector(".search-form");
gallery = document.querySelector(".gallery");
btnLoadMore = document.querySelector(".load-more");



// function getPictures(pictureName, page) {
//   const URL = `https://pixabay.com/api/?key=35723548-55cce6d92fe2b0376e8aa06a2&q="${pictureName}"
//     &image_type="photo"&orientation="horizontal"&safesearch="true"&per_page=40&page=${page}`;
//   return fetch(URL).then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   }).then(data => console.log(data));
// }
// getPictures("cat", 3);

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
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>`)
.join("");

gallery.insertAdjacementHTML("beforeend", createMarkup)
}