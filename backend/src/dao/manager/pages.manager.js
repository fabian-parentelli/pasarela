import { pageModel } from '../models/pages.model.js';

export default class Page {

    create = async (project) => {
        return await pageModel.create(project);
    };

    getByName = async (name) => {
        return await pageModel.findOne({ projectName: name }).lean();
    };

    getAll = async (query, limit, page) => {
        return await pageModel.paginate(query, { limit, page, lean: true });
    };

    getRandom = async (limit) => {
        return await pageModel.aggregate([
            { $sample: { size: limit } },
        ]);
    };

    count = async () => {
        return await pageModel.countDocuments();
    };
};