console.log("Dockering ")

const fs = require('fs');

fs.stat('app.js', (err, stats) => {
    if (err) {
        console.log(`File doesn't exist.`);
    } else {
        console.log(`File size is:`, stats.size, "MB"); // File size in bytes
    }
});

// as of now, the file size of js is 226 MB, but when i use docker, the file size is 165 MB
// this is jsut a speculation, does not happen always\
// the size of the file generally increase, but alpine may reduce save space