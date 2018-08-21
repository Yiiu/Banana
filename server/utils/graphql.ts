import * as fs from 'fs';
import * as path from 'path';

export const getSchema = (root: string) => {
  const reg = /.graphql$/;
  const fileArr: any[]  = [];
  const getFile = (filePath: string) => {
    const files = fs.readdirSync(filePath);
    files.forEach((filename) => {
      const filedir = path.join(filePath, filename);
      const stat = fs.statSync(filedir);
      if (stat.isDirectory()) {
        getFile(filedir);
      }
      if (stat.isFile()) {
        if (reg.test(filename)) {
          fileArr.push(fs.readFileSync(filedir, 'utf8'));
        }
      }
    });
  };
  getFile(root);
  return fileArr;
};
