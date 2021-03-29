
const NAMES_COMMENT = ['Женя', 'Вася', 'Егор', 'Вадим', 'Алена', 'Анжела'];
const MSGS = [
  'Всё отлично!',
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const TOTAL_PICTURES = 25;

//Функция, возвращающая случайное целое число
const getRandomNumber = (minLimit, maxLimit) => {
  const numberRand = Math.random() * (maxLimit - minLimit) + minLimit;
  return numberRand;
};

//Функция проверяет чтобы в диапозоне переданых чисел не было отрицательных чисел
const checkOnNegativeNumber = (min, max) => {
  if (min < 0 || max < 0) {
    throw 'Число не может быть меньше нуля';
  }
};

//Функция выводит случайное число из указаного диапозона чисел
const generateIntegerNumber = (min, max) => {
  checkOnNegativeNumber(min, max);
  return Math.floor(getRandomNumber(min, max));
};
generateIntegerNumber(0, 100);

//Функция для проверки максимальной длины строки.
const MAX_LENGTH_STRING = 140;
const checkCharacterString = (value, max) => {

  if (value.length < max) {
    return getRandomArrayElement(MSGS);
  }
  return getRandomArrayElement(MSGS).slice(0, 200);

};

//Функция генерирует случайный элемент переданного массива
const getRandomArrayElement = (elements) => {
  return elements[generateIntegerNumber(0, elements.length - 1)];
};

checkCharacterString(getRandomArrayElement(MSGS), MAX_LENGTH_STRING);



const createPicture = (index) => {
  const id = index + 1;
  const url = 'photos/' + id + '.jpg';
  const avatarComment = 'img/avatar-' + generateIntegerNumber(1, 6) + '.svg';
  const idComment = generateIntegerNumber(1, 100);
  const randomNameComments = getRandomArrayElement(NAMES_COMMENT);
  const randomMsgComments = checkCharacterString(MSGS);

  return {
    id: id,
    url: url,
    description: 'Очень красивая фотография',
    likes: generateIntegerNumber(15, 200),
    comments: [
      {
        id: idComment,
        avatar: avatarComment,
        message: randomMsgComments,
        name: randomNameComments,
      }
    ],
  };
};

const similarPictures = () => {
  const nums = [];
  for (let i = 0; i < 25; i++) {
    nums.push(createPicture(i));
  }
  return nums;
};

console.log(similarPictures());








