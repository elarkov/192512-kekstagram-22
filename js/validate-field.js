const hashtag = document.querySelector('.text__hashtags');


const isHashtagLetter = (tag) => {
  const pattern = /[А-Яа-яёЁ0-9]/;
  return pattern.test(tag);
};

const isHashtaEnglishgLetter = (tag) => {
  const pattern = /[A-Za-z]/;
  return pattern.test(tag);
};

const isHashtagSymbol = (tag) => {
  const pattern = /[-!$%^&*№()_+|~=`\\{}\]:";'<>?,.]/;
  return pattern.test(tag);
};

const isHashtagEmoji = (tag) => {
  const pattern = /[\u{203C}\u{2049}\u{20E3}\u{2122}\u{2139}\u{2194}\u{2199}\u{21A9}\u{21AA}\u{231A}\u{231B}\u{23E9}\u{23EC}\u{23F0}\u{23F3}\u{24C2}\u{25AA}\u{25AB}\u{25B6}\u{25C0}\u{25FB}\u{25FE}\u{2600}\u{2601}\u{260E}\u{2611}\u{2614}\u{2615}\u{261D}\u{263A}\u{2648}\u{2653}\u{2660}\u{2663}\u{2665}\u{2666}\u{2668}\u{267B}\u{267F}\u{2693}\u{26A0}\u{26A1}\u{26AA}\u{26AB}\u{26BD}\u{26BE}\u{26C4}\u{26C5}\u{26CE}\u{26D4}\u{26EA}\u{26F2}\u{26F3}\u{26F5}\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}\u{270C}\u{270F}\u{2712}\u{2714}\u{2716}\u{2728}\u{2733}\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}\u{2755}\u{2757}\u{2764}\u{2795}\u{2797}\u{27A1}\u{27B0}\u{2934}\u{2935}\u{2B05}\u{2B07}\u{2B1B}\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{1F004}\u{1F0CF}\u{1F170}\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{1F191}\u{1F19A}\u{1F1E7}\u{1F1EC}\u{1F1EE}\u{1F1F0}\u{1F1F3}\u{1F1F5}\u{1F1F7}\u{1F1FA}\u{1F201}\u{1F202}\u{1F21A}\u{1F22F}\u{1F232}\u{1F23A}\u{1F250}\u{1F251}\u{1F300}\u{1F320}\u{1F330}\u{1F335}\u{1F337}\u{1F37C}\u{1F380}\u{1F393}\u{1F3A0}\u{1F3C4}\u{1F3C6}\u{1F3CA}\u{1F3E0}\u{1F3F0}\u{1F400}\u{1F43E}\u{1F440}\u{1F442}\u{1F4F7}\u{1F4F9}\u{1F4FC}\u{1F500}\u{1F507}\u{1F509}\u{1F53D}\u{1F550}\u{1F567}\u{1F5FB}\u{1F640}\u{1F645}\u{1F64F}\u{1F680}\u{1F68A}]/;
  return pattern.test(tag);
};

const isHashtagSharp = (tag) => {
  for (let i = 1; i < tag.length; i++) {
    if (tag[i] === '#') {
      return true;
    }
  }
  return false;
}

const isHastagEqual = (hashtagsArray) => {
  for (let i = 0; i < hashtagsArray.length - 1; i++) {
    if (hashtagsArray[i].toUpperCase() === hashtagsArray[i+1].toUpperCase()) {
      return true;
    }
  }
  return false;
}

const checkValidityHashtag = () => {

  hashtag.addEventListener('input', () => {
    if (hashtag.value === '') {
      return true;
    } else {
      const values = hashtag.value.split(' ');
      for (let i = 0; i < values.length; i++) {
        if (values[i][0] !== '#') {
          hashtag.setCustomValidity('Хэштег должен начинаться с #');
        } else if (values[i][1] === '#') {
          hashtag.setCustomValidity('Недопустимо использовать # более одного раза в одном хэштеге');
        } else if (values[i][1] === ' ') {
          hashtag.setCustomValidity('Недопустимо чтобы хэштег состоял только из символов #');
        } else if (values[i].length > 20) {
          hashtag.setCustomValidity('Один хэштег не может быть больше 20 символов');
        } else if (!isHashtagLetter(values[i]) && isHashtaEnglishgLetter(values[i])) {
          hashtag.setCustomValidity('Хэштег должен содержать в себе только буквы и цифры');
        } else if (isHashtagSymbol(values[i])) {
          hashtag.setCustomValidity('Запрещенно вводить специальные символы');
        } else if (isHashtagEmoji(values[i])) {
          hashtag.setCustomValidity('Запрещены эмоджи в хэштеге');
        } else if (isHashtagSharp(values[i])) {
          hashtag.setCustomValidity('Символ # допустим только в начале хэштега');
        } else if (isHastagEqual(values)) {
          hashtag.setCustomValidity('Не допустимы одинаковые хэштеги');
        } else if (values.length > 5) {
          hashtag.setCustomValidity('Количество хэштегов не может быть больше 5');
        } else {
          hashtag.setCustomValidity('');
        }
      }
    }



  });
};

export { checkValidityHashtag };
