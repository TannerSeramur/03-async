'use strict';

const fs = require('fs');
let contents = [];

module.exports = exports = (files, callback) => {
  readAll([...files],callback);
  contents = [];
};

const readOne = (file,callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    else {
        callback(undefined, data);  
    }
  });
};

const readAll = (paths, callback) => {
  let contents = paths.map((item)=>{
    readOne( item, (err, data) => {
      if(err){ throw err; };
      // console.log(`Read File ${item} DATA ${data} `);
      return data;
    }); 
  })
  callback(undefined, contents);
};

readAll(['../files/1.txt', '../files/2.txt', '../files/3.txt'],(err, data) => {
  if (err) {
    callback(err);
  }
  else {
    console.log(data, 'DATA');
  }
});

