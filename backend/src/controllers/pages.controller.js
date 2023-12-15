import * as pageService from '../services/pages.service.js';
import { PageNotFound } from '../utils/custom-exceptions.utils.js';

const create = async (req, res) => {
    const newProject = {
        imgName: {
            logo: req.files['logo'][0],
            front: req.files['front'][0],
            images: req.files['images']
        },
        imgUrl: req.cloudinaryUrls,
        project: req.body,
        user: req.user
    };
    try {
        const result = await pageService.create(newProject);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAll = async (req, res) => {
    const { limit = 10, page = 1, query = false, random } = req.query;

    try {
        const result = await pageService.getAll(limit, page, query, random);
        if (result) return res.sendSuccess(result);
    } catch (error) {

        console.log(error); // <<<<<<<<<<<<<<<<<<<< Borrar <<<<<<<<<<<<<<<<<<

        if (error instanceof PageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { create, getAll };