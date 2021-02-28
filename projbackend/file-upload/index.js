const express = require('express');
const router = express.Router();
const { verifyJwtInUser} = require("../../utils/jwt");
const {download} = require('./download-controller.js');

module.exports = () => {
  router.get('/file/:fileKey', download);
  return router;
};
