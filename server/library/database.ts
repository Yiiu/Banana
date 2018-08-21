import * as path from 'path';
import {createConnection} from 'typeorm';

const root = path.resolve(__dirname, '..');

const entityPath = `${root}/entity/*.{js,ts}`;

export const database = async () => {
  return await createConnection({
    type: 'sqlite',
    database: 'banana_database',
    entities: [entityPath],
    synchronize: true,
    logging: false
  });
};
