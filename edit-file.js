'use strict';

const fs = require('fs');
const faker = require('faker');

let file = `./files/test.txt`;

let data = fs.readFileSync(file);

let randomVal = faker.random.number();

// console.log(randomVal);

// console.log(data.toString());

function updateFile(file, updateTxt) {
    fs.readFile(file, function(err, data){
      if(err){throw err;}
  
      var newValue = updateTxt;
  
      fs.writeFile(file, newValue, function (err) {
        if(err){throw err};
        console.log('new text is',fs.readFileSync(file).toString());
      });
    });
  }


updateFile(file, randomVal);
// console.log(data.toString);

