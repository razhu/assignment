const fs = require('fs');
const { parse } = require('csv-parse');
const getRemoteFile = require('./request');

const assignment = async (localOrRemote = 'local', transformerFunction) => {
    console.time('EXECUTION_TIME');
    let fileRoute = '';
    if (localOrRemote === 'local') {// user chose local file
      fileRoute = './input.csv';
    } else { // user chose remote. will make the request save file locally
      await getRemoteFile();
      fileRoute = './input_remote.csv';
    }
    // const start = Date.now();
    fs.createReadStream(fileRoute)
      .pipe(parse({ delimiter: ',', from_line: 2 }))
      .on('data', row => {
        console.log(transformerFunction(parseInt(row[0])));
      })
      .on('end', () => {
        console.timeEnd('EXECUTION_TIME');
      })
      .on('error', error => {
        console.log(error.message);
      });
  };

  module.exports = assignment;