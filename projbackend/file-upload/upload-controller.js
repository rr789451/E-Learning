const s3 = require("../s3.config");

const doUpload = (key, file) => {
  const s3Client = s3.s3Client;
  const params = s3.uploadParams;
  params.Key = key;
  params.Body = file.buffer;
  s3Client.upload(params, function (err, data) {
    console.log("file aws", data, err);
  });
};

module.exports = {
  doUpload: doUpload,
};
