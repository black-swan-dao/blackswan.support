import { loadData } from "$lib/modules/sanity.js"

export const get = async (request) => {
    const page = await loadData("*[slug.current == $slug][0]", { slug: request.params.slug })
    return { body: { page: page.status === 404 ? 'ERROR' : page } };
};
