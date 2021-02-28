const s3 = require('../../config/aws-s3/s3.config.js');

exports.download = (req, res) => {
  // download the file via aws s3 here
  const {fileKey} = req.query;
  console.log('Trying to download file', fileKey);
  const options = {
    Bucket: 'event-media-1',
    Key: fileKey,
  };
  const s3Client = s3.s3Client;
  res.attachment(fileKey);
  const fileStream = s3Client.getObject(options).createReadStream();
  fileStream.pipe(res);
};
