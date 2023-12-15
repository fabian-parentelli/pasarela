import { pageManager } from '../dao/manager/index.manager.js';

export default class PageRepository {

    create = async (project) => {
        const result = await pageManager.create(project);
        return result;
    };

    getByName = async (name) => {
        const result = await pageManager.getByName(name);
        return result;
    };

    getAll = async (query, limit, page) => {
        const result = await pageManager.getAll(query, limit, page);
        return result;
    };

    getRandom = async (limit) => {
        const result = await pageManager.getRandom(limit);
        return result;
    };

    count = async () => {
        const result = await pageManager.count();
        return result;
    };
};