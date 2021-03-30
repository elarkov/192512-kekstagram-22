
const NAMES_COMMENT = ['Женя', 'Вася', 'Егор', 'Вадим', 'Алена', 'Анжела'];

const MSGS = [
  'Всё отлично!',
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
  'Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.',
  'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.',
];

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

//Функция для проверки максимальной длины строки.
const checkCharacterString = (value, maxLength) => {

  if (value.length <= maxLength) {
    return true;
  }
  return false;

};

checkCharacterString();

//Функция генерирует случайный элемент переданного массива
const getRandomArrayElement = (elements) => {
  return elements[generateIntegerNumber(0, elements.length - 1)];
};

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


//Функция генерирует 25 объектов карточек
const createPicture = (index) => {
  const id = index + 1;
  const url = 'photos/' + id + '.jpg';
  const avatarComment = 'img/avatar-' + generateIntegerNumber(1, 6) + '.svg';
  const сommentId = getIdComment();
  const randomNameComments = getRandomArrayElement(NAMES_COMMENT);
  const randomMsgComments = getRandomArrayElement(MSGS);
  const randomDescription = getRandomArrayElement(DESCRIPTION);

  return {
    id: id,
    url: url,
    description: randomDescription,
    likes: generateIntegerNumber(15, 200),
    comments: [
      {
        id: сommentId,
        avatar: avatarComment,
        message: randomMsgComments,
        name: randomNameComments,
      },
    ],
  };
};

const getIdNumber = () => {
  const nums = [];
  for (let index = 0; index <= 25; index++) {
    nums.push(createPicture(index));
  }
  return nums;
};

const similarPictures = getIdNumber();
similarPictures();









