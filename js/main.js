
import { isLengthString } from './util.js';
import { generateCommentMessage } from './comment.js';
import { renderPhoto } from './thumbnails.js';
import { uploadPicture, changeScaleImage, changeEffectFilter } from './upload-file.js';
import { checkValidityComment, checkValidityHashtag } from './validate-field.js';

renderPhoto();
isLengthString(generateCommentMessage().message);
uploadPicture();
changeScaleImage();
changeEffectFilter();
checkValidityHashtag();
checkValidityComment();

















