import multer from 'multer';

const storage = multer.memoryStorage();

const uploader = multer({
    storage,
    onError: (err, next) => {
        console.log(err);
        next();
    }
});

const multipleUploader = uploader.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'front', maxCount: 1 },
    { name: 'images', maxCount: 4 }
]);

export { multipleUploader };