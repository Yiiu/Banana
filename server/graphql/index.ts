import TestQuery from './Test/query';

import { getSchema } from '../utils/graphql';

const defaultGraphql = __dirname;

export const schema = () => getSchema(defaultGraphql);
export const query = () => {
  const data: {[key: string]: any} = {
    ...new TestQuery()
  };
  const filter = () => {
    const querys: {[key: string]: any} = {};
    for (const value in data) {
      if (!/^_/.test(value)) {
        querys[value] = data[value];
      }
    }
    return querys;
  };
  return filter();
};
