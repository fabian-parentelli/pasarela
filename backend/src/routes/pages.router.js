import Router from './routes.js';
import * as pageController from '../controllers/pages.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.config.js';
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class PagesRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN'], passportEnum.JWT, multipleUploader, uploadToCloudinary, pageController.create);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, pageController.getAll);
    };
};