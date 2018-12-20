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
    var contents = [];
    readOne(paths[0],(err, data) => {
        if (err) { throw err; }
        else {
          console.log('Read File 1');
          contents.push(data.toString().trim());
          console.log('contents here', contents);
          readOne(paths[1],(err, data) => {
            if (err) { throw err; }
            else {
              console.log('Read File 2');
              contents.push(data.toString().trim());
              console.log('contents here', contents);
              readOne(paths[2],(err, data) => {
                if (err) { throw err; }
                else {
                  console.log('Read File 3');
                  contents.push(data.toString().trim());
                  console.log('contents here', contents);
                
                }
         
                callback(undefined, contents);
              });
            }
          });
        }
      });

    
    
}

console.log(readAll(['../files/1.txt', '../files/2.txt', '../files/3.txt'],(err, data) => {
    if (err) {
      callback(err);
    }
    else {
        console.log('HERE');
        // return(data);
    //   console.log('Read File 1');
    //   contents.push(data.toString().trim());
    //   console.log('contents here', contents);
    }
  })
);

