import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';


form = document.querySelector("#search-form");
gallery = document.querySelector(".gallery");
btnLoadMore = document.querySelector(".load-more");

btnLoadMore.addEventListener('click',onBtnLoadMore);
form.addEventListener('submit',onSearch);

let page = 1;
let counter = 0;

function onSearch(evt){
evt.preventDefault();
gallery.innerHTML = "";
const pictureName = evt.target.elements.searchQuery.value.trim(); 

 if (pictureName === "" || !pictureName){
  return
 }
console.log(pictureName);
const pictures = getFetch(pictureName);

getFetch(pictureName).then(pictures => createMarkup(pictures));
console.log(pictures);
btnLoadMore.hidden = false;
}

function onBtnLoadMore(evt){
  counter +=1;
  page += 1;
  // const pictureName = evt.target.elements.searchQuery.value.trim(); 
  const pictures = getFetch();
  getFetch(pictureName).then(pictures => createMarkup(pictures));
  // if (counter !== resp.total)
  // {page += 1;
  // getFetch(pictureName).then(pictures => createMarkup(pictures))
  // }

  btnLoadMore.hidden = true;
  Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
}


function createMarkup(data) {
  const markup = data.hits.map(
    ({
    webformatURL,
    tags,   
    likes,
    views,
    comments,
    downloads,
  }) => `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>:${likes}
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
</div>`
)
.join("");

gallery.insertAdjacentHTML("beforeend", markup);

if (data.hits.length < 40) {
  btnLoadMore.hidden = true;
  Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
} else { btnLoadMore.hidden = false; }
}


async function getFetch(pictureName){
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "35723548-55cce6d92fe2b0376e8aa06a2";
const queryParams = new URLSearchParams({
  key: API_KEY,
  q: pictureName,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 40,
  page: page,
  safesearch: true,
});
  
try{
const resp = await axios.get(`${BASE_URL}?${queryParams}`);
const pictures = resp.data;
return pictures;

} catch(err){
  Notiflix.Notify.info(err.message);
 }
}


