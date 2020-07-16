import { ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav= async ()=>{
    const data = await  contentfulClient.getEntry('3Y5qtkZjB9BJbTBWi6GZ6k')
    return data;
}

export const getContentfulHomepage = async ()=>{
    const data= await contentfulClient.getEntry({entryId:'2OLfP7jgx2qxdORoMNthMS', include: 3})
    return data;
}