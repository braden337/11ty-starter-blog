import moment from 'moment';

for (let time of document.querySelectorAll('.post-meta time')) {
  time.innerText = moment(time.dataset.date).fromNow();
}

window.onclick = function (event) {
  let target = event.target;

  if (target.nodeName === 'IMG') {
    window.location = target.src;
  }
};

let rss = document.querySelector('header li:last-of-type');

rss.firstElementChild.innerHTML = `
<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16" width="16">
  <path fill="currentColor" d="M 4 4.44 v 2.83 c 7.03 0 12.73 5.7 12.73 12.73 h 2.83 c 0 -8.59 -6.97 -15.56 -15.56 -15.56 Z m 0 5.66 v 2.83 c 3.9 0 7.07 3.17 7.07 7.07 h 2.83 c 0 -5.47 -4.43 -9.9 -9.9 -9.9 Z M 6.18 15.64 A 2.18 2.18 0 0 1 6.18 20 A 2.18 2.18 0 0 1 6.18 15.64"></path>
</svg>`;

for (let img of document.querySelectorAll('article > p > img')) {
  let caption = img.alt;
  let copied_img = img.cloneNode();

  let figure = document.createElement('figure');
  let figcaption = document.createElement('figcaption');

  figcaption.innerText = caption;
  figure.append(copied_img, figcaption);
  img.replaceWith(figure);
}
