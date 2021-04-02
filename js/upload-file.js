const uploadPicture = () => {
  const uploadForm = document.querySelector('.img-upload__form');
  const uploadFileInput = uploadForm.querySelector('#upload-file');
  const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
  const body = document.querySelector('body');
  const closeButton = uploadOverlay.querySelector('.img-upload__cancel');

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

  document.addEventListener('keydown', closeKey);
  uploadFileInput.addEventListener('change', openFormEdit);
  closeButton.addEventListener('click', closeFormEdit);


};

export { uploadPicture };
