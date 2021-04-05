const MIN_VALUE = 25;
const STEP_VALUE = 25;
const MAX_VALUE = 100;
const MIN_FILTER_VALUE = 0;
const MAX_FILTER_VALUE = 100;
const MIN_START_VALUE = 100;
const STEP_VALUE_EFFECT = 1;
const MIN_FILTER_VALUE_CHROME = 0;
const MAX_FILTER_VALUE_CHROME = 1;
const MIN_START_VALUE_CHROME = 1;
const STEP_VALUE_EFFECT_CHROME = 0.1;
const MIN_FILTER_VALUE_MARVIN = 0;
const MAX_FILTER_VALUE_MARVIN = 100;
const MIN_START_VALUE_MARVIN = 100;
const STEP_VALUE_EFFECT_MARVIN = 1;
const MIN_FILTER_VALUE_PHOBOS = 0;
const MAX_FILTER_VALUE_PHOBOS = 3;
const MIN_START_VALUE_PHOBOS = 3;
const STEP_VALUE_EFFECT_PHOBOS = 0.1;
const MIN_FILTER_VALUE_HEAT = 1;
const MAX_FILTER_VALUE_HEAT = 3;
const MIN_START_VALUE_HEAT = 3;
const STEP_VALUE_EFFECT_HEAT = 0.1;

const uploadForm = document.querySelector('.img-upload__form');
const uploadFileInput = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imgPreview = document.querySelector('.img-upload__preview');
const closeButton = uploadOverlay.querySelector('.img-upload__cancel');
const scaleContainer = document.querySelector('.scale');
const scaleValueControl = scaleContainer.querySelector('.scale__control--value');
const scaleSmallerButton = scaleContainer.querySelector('.scale__control--smaller');
const scaleBiggerButton = scaleContainer.querySelector('.scale__control--bigger');
const effectElementRadio = uploadForm.querySelectorAll('.effects__radio');
const effectPreviewSpan = uploadForm.querySelectorAll('.effects__preview');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const effectSliderValue = uploadForm.querySelector('.effect-level__value');

/* Library is NOUISLIDER (https://refreshless.com/nouislider) */
noUiSlider.create(sliderElement, {
  range: {
    min: MIN_FILTER_VALUE,
    max: MAX_FILTER_VALUE,
  },
  start: MIN_START_VALUE,
  step: STEP_VALUE_EFFECT,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const uploadPicture = () => {

  const openFormEdit = () => {
    uploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    imgPreview.firstElementChild.style.filter = 'none';
  };

  const closeFormEdit = () => {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadFileInput.value = '';
  };

  const closeKey = (evt) => {
    if (evt.code === 'Escape') {
      closeFormEdit();
    }
  };

  uploadFileInput.addEventListener('change', openFormEdit);
  closeButton.addEventListener('click', closeFormEdit);
  document.addEventListener('keydown', closeKey);
};

const changeScaleImage = () => {
  const checkButton = () => {
    if (parseInt(scaleValueControl.value) === MIN_VALUE) {
      scaleSmallerButton.disabled = true;
      scaleBiggerButton.disabled = false;
    } else if (parseInt(scaleValueControl.value) === MAX_VALUE) {
      scaleSmallerButton.disabled = false;
      scaleBiggerButton.disabled = true;
      imgPreview.style.transform = "scale(1)";
    } else {
      scaleSmallerButton.disabled = false;
      scaleBiggerButton.disabled = false;
    }
  };

  scaleBiggerButton.addEventListener('click', () => {
    scaleValueControl.value = `${parseInt(scaleValueControl.value) + STEP_VALUE}%`;
    imgPreview.style.transform = `scale(0.${parseInt(scaleValueControl.value)})`;
    checkButton();
  });

  scaleSmallerButton.addEventListener('click', () => {
    scaleValueControl.value = `${parseInt(scaleValueControl.value) - STEP_VALUE}%`;
    imgPreview.style.transform = `scale(0.${parseInt(scaleValueControl.value)})`;
    checkButton();
  });
  window.addEventListener('DOMContentLoaded', checkButton);
};

const changeEffectFilter = () => {
  sliderElement.style.display = 'none';

  for (let i = 0; i < effectElementRadio.length; i++) {
    effectElementRadio[i].addEventListener('click', () => {
      imgPreview.firstElementChild.className = '';
      imgPreview.firstElementChild.classList.add(String(effectPreviewSpan[i].classList[1]));

      if (effectPreviewSpan[i].classList[1] == 'effects__preview--none') {
        sliderElement.style.display = 'none';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: MIN_FILTER_VALUE,
            max: MAX_FILTER_VALUE,
          },
          start: MIN_START_VALUE,
          step: STEP_VALUE_EFFECT,
        });
      } else if (effectPreviewSpan[i].classList[1] == 'effects__preview--chrome' || effectPreviewSpan[i].classList[1] == 'effects__preview--sepia') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: MIN_FILTER_VALUE_CHROME,
            max: MAX_FILTER_VALUE_CHROME,
          },
          start: MIN_START_VALUE_CHROME,
          step: STEP_VALUE_EFFECT_CHROME,
        });
      } else if (effectPreviewSpan[i].classList[1] == 'effects__preview--marvin') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: MIN_FILTER_VALUE_MARVIN,
            max: MAX_FILTER_VALUE_MARVIN,
          },
          start: MIN_START_VALUE_MARVIN,
          step: STEP_VALUE_EFFECT_MARVIN,
        });
      } else if (effectPreviewSpan[i].classList[1] == 'effects__preview--phobos') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: MIN_FILTER_VALUE_PHOBOS,
            max: MAX_FILTER_VALUE_PHOBOS,
          },
          start: MIN_START_VALUE_PHOBOS,
          step: STEP_VALUE_EFFECT_PHOBOS,
        });
      } else if (effectPreviewSpan[i].classList[1] == 'effects__preview--heat') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: MIN_FILTER_VALUE_HEAT,
            max: MAX_FILTER_VALUE_HEAT,
          },
          start: MIN_START_VALUE_HEAT,
          step: STEP_VALUE_EFFECT_HEAT,
        });
      }

      sliderElement.noUiSlider.on('update', (value, handle) => {
        effectSliderValue.setAttribute('value', value[handle]);
        switch (effectPreviewSpan[i].classList[1]) {
          case 'effects__preview--none': {
            imgPreview.firstElementChild.style.filter = 'none';
            break;
          }
          case 'effects__preview--chrome': {
            imgPreview.firstElementChild.style.filter = `grayscale(${value[handle]})`;
            break;
          }
          case 'effects__preview--sepia': {
            imgPreview.firstElementChild.style.filter = `sepia(${value[handle]})`;
            break;
          }
          case 'effects__preview--marvin': {
            imgPreview.firstElementChild.style.filter = `invert(${value[handle]}%)`;
            break;
          }
          case 'effects__preview--phobos': {
            imgPreview.firstElementChild.style.filter = `blur(${value[handle]}px)`;
            break;
          }
          case 'effects__preview--heat': {
            imgPreview.firstElementChild.style.filter = `brightness(${value[handle]})`;
            break;
          }
        }
      });
    });
  }
};

export { uploadPicture, changeScaleImage, changeEffectFilter };
