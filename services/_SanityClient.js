import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const _SanityClient = sanityClient({
  projectId: 'wf4htp5a',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skua7QHBFcMaPANKRelzYuWvsCKSciufiAlweVEVT6LMZF6cj9cpuHEFJ5BaJfj9B18XqeFQAbAJD6VFaYT4m1BPzcI3bDLzLt18UohGsqzLUQlhcQ2dn5AC8DX1Ri37UZi94JrqUUOfN8urAKkVUQERWvGU746sbjO2yPovWVIJv2T9pLUP',
});

const builder = imageUrlBuilder(_SanityClient);

export const urlFor = (source) => builder.image(source);
