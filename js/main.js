
import { isLengthString } from './util.js';
import { generateCommentMessage } from './comment.js';
import { showPhoto } from './thumbnails.js';
import { uploadPicture, changeScaleImage, changeEffectFilter } from './upload-file.js';
import { checkValidityHashtag } from './validate-field.js';

showPhoto();
isLengthString(generateCommentMessage().message);
uploadPicture();
changeScaleImage();
changeEffectFilter();
checkValidityHashtag();
















