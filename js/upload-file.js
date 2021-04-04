const MIN_VALUE = 25;
const STEP_VALUE = 25;
const MAX_VALUE = 100;
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
const effectElementRadio = uploadForm.querySelectorAll('.effects__preview');

const uploadPicture = () => {

  const openFormEdit = () => {
    uploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
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

const scaleImage = () => {
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
  for (let i = 0; i < effectElementRadio.length; i++) {
    effectElementRadio[i].addEventListener('click', () => {
      imgPreview.firstElementChild.className = '';

      switch (effectElementRadio[i].classList[1]) {
        case 'effects__preview--none': {
          imgPreview.style.filter = 'none';
          break;
        }
        case 'effects__preview--chrome': {
          imgPreview.style.filter = 'grayscale(1)';
          break;
        }
        case 'effects__preview--sepia': {
          imgPreview.style.filter = 'sepia(1)';
          break;
        }
        case 'effects__preview--marvin': {
          imgPreview.style.filter = 'invert(100%)';
          break;
        }
        case 'effects__preview--phobos': {
          imgPreview.style.filter = 'blur(3px)';
          break;
        }
        case 'effects__preview--heat': {
          imgPreview.style.filter = 'brightness(3)';
          break;
        }
      }
    });
  }
};

export { uploadPicture, scaleImage, changeEffectFilter };
