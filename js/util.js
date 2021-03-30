const STRING_LENGTH = 120;

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
const isLengthString = (string, maxLengthString = STRING_LENGTH) => {
  if (string.length <= maxLengthString) {
    return true;
  }
  return false;
};

//Функция генерирует случайный элемент переданного массива
const getRandomArrayElement = (elements) => {
  return elements[generateIntegerNumber(0, elements.length - 1)];
};



export { generateIntegerNumber, isLengthString, getRandomArrayElement };
