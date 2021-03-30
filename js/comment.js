import { generateIntegerNumber, getRandomArrayElement } from './util.js';

const DEFAULT_INDEX_COMMENT = 10;
const MIN_AVATAR_NUM = 1;
const MAX_AVATAR_NUM = 6;
const NAMES_COMMENT = ['Женя', 'Вася', 'Егор', 'Вадим', 'Алена', 'Анжела'];
const MSGS = [
  'Всё отлично!',
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//функция генерирует id так чтобы оне не повторялся в выведеных резултатх
const getIdComment = () => {
  const idComments = [];
  const idComment = generateIntegerNumber(1, 100);
  idComments.push(idComment);

  if (idComments.length > 1) {
    idComments.map(el => el == idComment ? idComments.pop() : idComment);
  } else {
    return idComment;
  }
  return idComment;
};

const generateCommentMessage = () => {
  const avatarComment = 'img/avatar-' + generateIntegerNumber(MIN_AVATAR_NUM, MAX_AVATAR_NUM) + '.svg';
  const сommentId = getIdComment();
  const randomNameComments = getRandomArrayElement(NAMES_COMMENT);
  const randomMsgComments = getRandomArrayElement(MSGS);

  return {
    id: сommentId,
    avatar: avatarComment,
    message: randomMsgComments,
    name: randomNameComments,
  };
};

//Функция генерирует комментарии
const getCommentData = () => {
  const index = generateIntegerNumber(1, DEFAULT_INDEX_COMMENT);
  const comments = [];
  for (let i = 0; i < index; i++) {
    comments.push(generateCommentMessage());
  }
  return comments;
};

export { getCommentData, generateCommentMessage };
