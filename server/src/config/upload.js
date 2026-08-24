import multer from "multer";
import path from "path";

const uploadDirectory =
  process.env.UPLOAD_DIR || "uploads/";

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, uploadDirectory);
  },

  filename: (request, file, callback) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = path.extname(file.originalname);

    callback(
      null,
      `${file.fieldname}-${uniqueSuffix}${extension}`
    );
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 500,
  },
});