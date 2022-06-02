import { loadData } from "$lib/modules/sanity.js"

export const get = async (request) => {
    const landing = await loadData("*[_id == 'landing'][0]")
    const researchFeed = await loadData("*[_type == 'researchFeedItem'][0...3]")
    return { body: { landing: landing.status === 404 ? 'ERROR' : landing, researchFeed: researchFeed.status === 404 ? 'ERROR' : researchFeed } };
};
