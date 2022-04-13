const express = require("express");
const router = express.Router();
const multer = require("multer");
const thumbnailGenerator = require("../helpers/videoThumbail")

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "media/uploads");
  },
  filename: (req, res, cb) => {
    cb(null, file.originalname.replace(/ /g, "_"));
  },
});
const port = require("../configs/default").port
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

router.post("/", upload.single("file"), (req, res, next) => {
  thumbnailGenerator.generateThumbnail(
    // /api/videos is made publically available in App.js
    "http://127.0.0.1:" +
      port +
      "/api/videos/" +
      req.file.filename.replace(/ /g, "_"),
    req.file.filename.replace(/ /g, "_"),
    req.userData.firstName
  );
  res.status(200).json({
    message: "Upload successful!",
  });
});

module.exports = router;
