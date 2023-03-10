import{
    // createCurrentUserHook,
    createClient
} from 'next-sanity';
import createImageUrlBuilder from 'next-sanity';

export const config={
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:"v1",

    useCdn: process.env.NODE_ENV ==="production",
}

export const sanityClient = createClient(config);
export const urlFor =(source)=> createImageUrlBuilder(config).image(source);
// export const useCurrentUser =createCurrentUserHook(config);