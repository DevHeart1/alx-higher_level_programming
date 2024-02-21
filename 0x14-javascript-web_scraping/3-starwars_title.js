#!/usr/bin/node
const request = require('request');
const ID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${ID}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  console.log(JSON.parse(body).title);
});
