#!/usr/bin/node
const fs = require('fs');

if (process.argv.length !== 4) {
    console.log('Pass in one file argument and its content');
    process.exit(1);
  }

  fs.writeFile(process.argv[2], process.argv[3], 'utf-8', (error,) => {
    if (error) {
      console.error(error);
    } else {
      console.log("successfully written");
    }
  });
  