import { loadData } from "$lib/modules/sanity.js"

export const get = async (request) => {
    const page = await loadData("*[_id == 'researchFeed'][0]")
    const researchFeed = await loadData("*[_type == 'researchFeedItem']")
    return { body: { page: page.status === 404 ? 'ERROR' : page, researchFeed: researchFeed.status === 404 ? 'ERROR' : researchFeed } };
};
