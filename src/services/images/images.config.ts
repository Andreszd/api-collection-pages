import path from 'path';
import multer from 'multer';

const dest = path.join(__dirname, '../../../imgsStorage');

const filesType = ['image/png', 'image/jpg'];

const upload = multer({
  dest,
  fileFilter: (req, file, cb) => {
    if (filesType.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

export default upload;
