import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: process.env.REACT_APP_PROJECT_ID,
	dataset: 'production',
	useCdn: true,
});
