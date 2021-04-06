// import { generateIntegerNumber, getRandomArrayElement } from './util.js';
// import { getCommentData } from './comment.js';

// const DESCRIPTION = [
//   'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
//   'Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.',
//   'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.',
// ];

// const SIMILAR_PIC_COUNT = 25;
// const MIN_LIKE_NUM = 15;
// const MAX_LIKE_NUM = 200;


// //Функция генерирует временные объекты с информацией
// const createPicture = (index) => {
//   const id = index + 1;
//   const url = 'photos/' + id + '.jpg';
//   const randomDescription = getRandomArrayElement(DESCRIPTION);
//   const dataComments = getCommentData();
//   return {
//     id: id,
//     url: url,
//     description: randomDescription,
//     likes: generateIntegerNumber(MIN_LIKE_NUM, MAX_LIKE_NUM),
//     comments: dataComments,
//   };
// };

// const getPicCard = () => {
//   const nums = [];
//   for (let index = 0; index < SIMILAR_PIC_COUNT; index++) {
//     nums.push(createPicture(index));
//   }
//   return nums;
// };



// export { getPicCard };
