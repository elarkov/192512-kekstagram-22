import { isLengthString } from './util.js';
import { generateCommentMessage } from './comment.js';
import { showPhoto } from './thumbnails.js';
import { uploadPicture } from './upload-file.js';

showPhoto();
isLengthString(generateCommentMessage().message);
uploadPicture();
















