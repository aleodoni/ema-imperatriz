import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export const apiEndpoint = process.env.PRISMIC_API || '';

export const client = (req = null): DefaultClient => {
  const options = req ? { req } : undefined;

  return Prismic.client(apiEndpoint, options);
};
