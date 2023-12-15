import { v2 as cloudinary } from 'cloudinary';
import config from './dotEnv.config.js';
import { pageRepository } from '../repositories/index.repositories.js';
import { PageNotFound } from '../utils/custom-exceptions.utils.js';

cloudinary.config({
    cloud_name: config.cloudName,
    api_key: config.apiKey,
    api_secret: config.apiSecret
});

const uploadToCloudinary = async (req, res, next) => {
    if (!req.files || req.files.length === 0) {
        req.cloudinaryUrls = [];
        return next();
    };

    const allFiles = [];
    const pictures = req.files;

    allFiles.push(pictures.logo[0]);
    allFiles.push(pictures.front[0]);
    const newAllFilles = allFiles.concat(pictures.images);

    const { projectName } = req.body;
    const exists = await pageRepository.getByName(projectName);
    if(exists) throw new PageNotFound('El nombre elegído para tu proyecto ya se encuentra utilizado'); 
    
    const nameProject = projectName.toLowerCase().replace(/\s/g, '');

    const uploadPromises = newAllFilles.map(file => {
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream({ folder: `project/${nameProject}` }, (error, result) => {
                if (error) {
                    console.error('Error al cargar la imagen a Cloudinary:', error);
                    reject(error);
                } else {
                    resolve(result.secure_url);
                }
            });

            stream.end(file.buffer);
        });
    });

    Promise.all(uploadPromises)
        .then(cloudinaryUrls => {
            req.cloudinaryUrls = cloudinaryUrls;
            next();
        })
        .catch(error => next(error));
};

const deleteImgs = async (publicIds) => {
    const deletionResults = [];

    for (const publicId of publicIds) {
        const result = await cloudinary.uploader.destroy(publicId);
        deletionResults.push(result);
    };
    return deletionResults;
};

const getPublicIds = (urls) => {
    const regex = /\/v\d+\/(.+)\.\w+/;

    const publicIds = urls.map(url => {
        const match = url.match(regex);
        if (match && match.length > 1) {
            return match[1];
        } else {
            throw new Error('URL de Cloudinary no válida');
        }
    });
    return publicIds;
};

export { uploadToCloudinary, deleteImgs, getPublicIds };