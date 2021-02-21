import path from 'path'
import multer from 'multer'
import fs from "fs"

const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads/')
    },
    filename(req, file, cb) {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      )
    },
  })
  
  function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)
  
    if (extname && mimetype) {
      return cb(null, true)
    } else {
      cb('Images only!')
    }
  }
  
 export const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb)
    },
  })


export const imagesUpload =  (req, res) => {
    const result = {
      public_id: req.file.filename,
      url: `${req.protocol}://${req.get('host')}/${req.file.path}`
    }
      res.send(result)
  };

  export const imageRemove =  (req, res) => {
    let image_id = req.body.public_id;
     fs.unlink(`./uploads/${image_id}`,
      res.send("ok"))
  };
