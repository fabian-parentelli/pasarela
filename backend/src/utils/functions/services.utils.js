import { pageRepository } from '../../repositories/index.repositories.js';

const getRandomProductInfo = async (limit, page) => {
    const count = await pageRepository.count();
    const startIdx = (+page - 1) * limit;
    const endIdx = startIdx + limit;
    return { count, startIdx, endIdx };
};

const getPaginatedIndices = (limit, page) => {
    const startIdx = (+page - 1) * limit;
    const endIdx = startIdx + limit;
    return { startIdx, endIdx };
};

const buildResponse = (docs, totalDocs, limit, page, hasPrevPage = false, hasNextPage = false, prevPage = null, nextPage = null) => {
    return {
        status: 'success',
        products: {
            docs,
            totalDocs,
            limit,
            totalPages: Math.ceil(totalDocs / limit),
            page: +page,
            pagingCounter: 1,
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage,
            prevLink: hasPrevPage ? prevPage : null,
            nextLink: hasNextPage ? nextPage : null,
        }
    };
};

export { getRandomProductInfo, getPaginatedIndices, buildResponse };