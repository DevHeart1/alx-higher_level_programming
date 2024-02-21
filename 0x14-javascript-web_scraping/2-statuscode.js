#!/usr/bin/node
const request = require('request');

request.get(process.argv[2], (error, response) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  console.log('code:', response.statusCode);
});
