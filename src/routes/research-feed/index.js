import { loadData } from "$lib/modules/sanity.js"

export const get = async (request) => {
    const researchFeed = await loadData("*[_type == 'researchFeedItem'] | order(_updatedAt asc)")
    return { body: { researchFeed: researchFeed.status === 404 ? 'ERROR' : researchFeed } };
};
