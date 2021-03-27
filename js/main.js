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
    return 'Строка проходит';
  }
  return false;

};
checkCharacterString('Василий привет как твои дела', MAX_LENGTH_STRING);




