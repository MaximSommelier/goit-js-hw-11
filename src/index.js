import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";

// function getPictures(pictureName, page) {
//   const URL = `https://pixabay.com/api/?key=35723548-55cce6d92fe2b0376e8aa06a2&q="${pictureName}"
//     &image_type="photo"&orientation="horizontal"&safesearch="true"&per_page=200&page=${page}`;
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

// function createCommentMarkup({ title, body, id }) {
//   return `<li data-id="${id}">
//     <h2>${title}</h2>
//     <p>${body}</p>
//     <button>Видалити відгук</button>
//     </li>`;
// }