const axios = require('axios');
const fs = require("fs");

const getRemoteFile = async () => {
    try {
         const response = await axios.get('https://raw.githubusercontent.com/razhu/assignment/master/input.csv')
         fs.writeFile('./input_remote.csv', response.data, (err) => {
            if (err)
              console.log(err);
            });                    
    } catch(err) {
         console.log(err)
    }
}
// getRemoteFile()
module.exports = getRemoteFile;