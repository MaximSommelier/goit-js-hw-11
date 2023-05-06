import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';


form = document.querySelector(".search-form");
gallery = document.querySelector(".gallery");
btnLoadMore = document.querySelector(".js-load-more");

let page = 1;
let counter = 0;

form.addEventListener('submit',onSearch);
btnLoadMore.addEventListener('click',onClick);

function onSearch(evt){
evt.preventDefault();
gallery.insertAdjacementHTML = "";
const pictureName = evt.target.value; 

getFetch(pictureName)
createMarkup(resp)
btnLoadMore.hidden = false;
}

function onBtnLoadMore(){
  counter +=1;
  if (counter !== resp.total)
  {page += 1;
  getFetch(pictureName)
  createMarkup(resp)}
  btnLoadMore.hidden = true;
  Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
}


function createMarkup(resp) {
  const markup = resp.map(
    ({
    webformatURLtags,
    tags,   
    likes,
    views,
    comments,
    downloads,
  }) => `<div class="photo-card">
  <img src="${webformatURLtags}" alt="${tags}" loading="lazy" />
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

gallery.insertAdjacementHTML("beforeend", markup)
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
  page: `${page}`,
  safesearch: true,
});
  
try{
const resp = await axios.get(`${BASE_URL}?${queryParams}`);
return resp;

} catch(err){
  Notiflix.Notify.info(err.message);
 }
}

