import ArticleMutation from './Article/mutation';

import ArticleQuery from './Article/query';

import { getSchema } from '../utils/graphql';

const defaultGraphql = __dirname;

export const schema = () => getSchema(defaultGraphql);
export const query = () => {
  const data: {[key: string]: any} = {
    ...new ArticleQuery()
  };
  return filter(data);
};

export const mutation = () => {
  const data: {[key: string]: any} = {
    ...new ArticleMutation()
  };
  return filter(data);
};

function filter (data: any) {
  const querys: {[key: string]: any} = {};
  for (const value in data) {
    if (!/^_/.test(value)) {
      querys[value] = data[value];
    }
  }
  return querys;
}
