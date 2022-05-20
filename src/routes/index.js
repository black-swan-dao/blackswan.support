import { loadData } from "$lib/modules/sanity.js"

export const get = async (request) => {
    const page = await loadData("*[_id == 'landing'][0]")
    const researchFeed = await loadData("*[_type == 'researchFeedItem'][0...3]")
    return { body: { page: page.status === 404 ? 'ERROR' : page, researchFeed: researchFeed.status === 404 ? 'ERROR' : researchFeed } };
};
