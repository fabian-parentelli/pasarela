import { pageRepository, userRepository } from "../repositories/index.repositories.js";
import { PageNotFound } from '../utils/custom-exceptions.utils.js';
import * as utilsFunction from '../utils/functions/services.utils.js';

const create = async (newProject) => {

    const project = { img: [] };

    const imgNames = [];
    imgNames.push(newProject.imgName.logo, newProject.imgName.front);
    const imgNameCon = imgNames.concat(newProject.imgName.images);

    imgNameCon.forEach((img, index) => {
        project.img.push({
            imgName: img.originalname,
            imgUrl: newProject.imgUrl[index]
        });
    });

    const newP = { ...project, ...newProject.project };
    newP.userId = newProject.user.user._id

    const existsName = await pageRepository.getByName(newProject.project.projectName);
    if (existsName) throw new PageNotFound('El nombre elegido para tu proyectyo ya existe');

    const result = await pageRepository.create(newP);
    if (!result) throw new PageNotFound('No se puede guardar la página');

    const userIs = await userRepository.getByEmail(newProject.user.user.email);
    userIs.project = result._id
    await userRepository.updateUser(userIs);

    return { status: 'success', result };
};

const getAll = async (limit, page, query, random) => {
    let cachedProducts = null;

    if (random === '1') {
        const { count, startIdx, endIdx } = await utilsFunction.getRandomProductInfo(limit, page);
        const randomProducts = await pageRepository.getRandom(count);
        const paginatedProducts = randomProducts.slice(startIdx, endIdx);

        cachedProducts = randomProducts;
        return utilsFunction.buildResponse(paginatedProducts, cachedProducts.length, limit, page);
    };

    if (random === '2') {
        const { startIdx, endIdx } = utilsFunction.getPaginatedIndices(limit, page, cachedProducts.length);
        const paginatedProducts = cachedProducts.slice(startIdx, endIdx);
        return utilsFunction.buildResponse(paginatedProducts, cachedProducts.length, limit, page);
    };

    const queryObj = query ? { category: { $regex: query, $options: "i" } } : {};
    const products = await pageRepository.getAll(queryObj, +limit, +page);

    if (page > products.totalPages || page <= 0) {
        throw new PageNotFound('Esta página no existe');
    };
    
    return utilsFunction.buildResponse(products.docs, products.totalDocs, limit, page, products.hasPrevPage, products.hasNextPage, products.prevPage, products.nextPage);
};

export { create, getAll };