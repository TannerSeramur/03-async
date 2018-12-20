'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-callbacks-array.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    // reader(files, (err,data) => {
      // console.log(err, 'ERROR HERE');
      expect(()=> {
        reader(files,(err.data) = {});
      }).toThrow();
      
    });
 


  it('reads more then 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];
    reader(files, (err,data) => {
      console.log(data, 'DATA HERE');
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(4);
      done();
    });
  });

});
