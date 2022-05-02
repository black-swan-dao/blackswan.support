import { loadData } from "$lib/modules/sanity.js"

export const get = async (request) => {
    const page = await loadData("*[]")
    return { body: { page: page.status === 404 ? 'ERROR' : page } };
};
