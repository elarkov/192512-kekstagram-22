const bigPictureContainer = document.querySelector('.big-picture');
const imgBig = document.querySelector('.big-picture__img img');
const countLikes = document.querySelector('.likes-count');
const countComments = document.querySelector('.comments-count');
const commentSocialContainer = document.querySelector('.social__comments');
const commentSocial = document.querySelector('.social__comment');
const countCommentSocial = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const descriptionPhoto = document.querySelector('.social__caption');
const fragment = document.createDocumentFragment();
const close = document.querySelector('.big-picture__cancel');
const bodyEl = document.querySelector('body');


const getBigPicture = (picture) => {
  return (evt) => {
    evt.preventDefault();
    
    bigPictureContainer.classList.remove('hidden');
    bodyEl.classList.add('modal-open');
    countCommentSocial.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    imgBig.src = picture.url;
    countLikes.textContent = picture.likes;
    countComments.textContent = picture.comments.length;
    descriptionPhoto.textContent = picture.description;

    while (commentSocialContainer.firstChild) {
      commentSocialContainer.removeChild(commentSocialContainer.firstChild);
    }

    picture.comments.forEach(({avatar, name, message}) => {
      const comment = commentSocial.cloneNode(true);
      const img = comment.querySelector('.social__picture');
      const msg = comment.querySelector('.social__text');

      img.src = avatar;
      img.alt = name;
      msg.innerHTML = message;
      fragment.appendChild(comment);
    });
    commentSocialContainer.appendChild(fragment);
  };
};

close.addEventListener('click', () => {
  bigPictureContainer.classList.add('hidden');
  bodyEl.classList.remove('modal-open');
});


export { getBigPicture };




