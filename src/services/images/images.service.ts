import fs from 'fs';
import path from 'path';

import { dest } from './images.config';

export const getImageByFileName = (fileName: string) => {
  return path.join(dest, '/' + fileName);
};

export const removeImage = (fileName: string): void => {
  const basePath = path.join(dest, '/' + fileName);
  if (fs.existsSync(basePath)) {
    fs.unlinkSync(basePath);
  }
};
