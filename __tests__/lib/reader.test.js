'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-callbacks-array.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
      expect(()=> {
        reader(files,(err.data) = {});
      }).toThrow();
      
    });
 


  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file3.txt'];
    reader(files, (err,data) => {
      console.log(err, '3RRRRRRRR')
      console.log(data, 'DATA HERE');
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });

});
