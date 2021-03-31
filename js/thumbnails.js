import { getPicCard } from './data.js';

const template = document.querySelector('#picture').content;
const newItemTemplate = template.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');
const similarPictures = getPicCard(1);

similarPictures.forEach(({ url, likes, comments }) => {
  const clonedElement = newItemTemplate.cloneNode(true);

  const urlImg = clonedElement.querySelector('.picture__img');
  const like = clonedElement.querySelector('.picture__likes');
  const comment = clonedElement.querySelector('.picture__comments');

  urlImg.src = url;
  like.textContent = likes;
  comment.innerHTML = comments.length;

  pictureFragment.appendChild(clonedElement);
});

pictures.appendChild(pictureFragment);



