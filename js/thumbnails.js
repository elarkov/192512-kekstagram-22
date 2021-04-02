import { getPicCard } from './data.js';
import { getBigPicture } from './big-thumb.js';

const template = document.querySelector('#picture').content;
const newItemTemplate = template.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');
const similarPictures = getPicCard();


const showPhoto = () => {
  similarPictures.forEach((el) => {

    const picture = newItemTemplate.cloneNode(true);
    const urlImg = picture.querySelector('.picture__img');
    const like = picture.querySelector('.picture__likes');
    const comment = picture.querySelector('.picture__comments');

    urlImg.src = el.url;
    like.textContent = el.likes;
    comment.innerHTML = el.comments.length;
    picture.addEventListener('click', getBigPicture(el));
    pictureFragment.appendChild(picture);

  });

  pictures.appendChild(pictureFragment);
};

export { showPhoto };



