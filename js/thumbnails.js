import { createFetch } from './create-fetch.js';
import { getBigPicture } from './big-thumb.js';

const template = document.querySelector('#picture').content;
const newItemTemplate = template.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');


const renderPhoto = () => {
  createFetch(
    (data) => {
      data.forEach((item) => {
        const picture = newItemTemplate.cloneNode(true);
        const urlImg = picture.querySelector('.picture__img');
        const like = picture.querySelector('.picture__likes');
        const comment = picture.querySelector('.picture__comments');

        urlImg.src = item.url;
        like.textContent = item.likes;
        comment.innerHTML = item.comments.length;
        picture.addEventListener('click', getBigPicture(item));
        pictureFragment.appendChild(picture);
      });
      pictures.appendChild(pictureFragment);
    },
    () => {
      console.log('ошибка');
    }
  );
};

export { renderPhoto };



