'use strict';

const fileReader = require('./lib/reader-fixed.js');
const fs = require('fs');

// Obtain and assert input
let files = process.argv.slice(2);

if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});

// fs.readFile(`./files/1.txt`, (err, data)=>{
//   if(err){throw err;}
//   console.log(data.toString());
// })

