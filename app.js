var replace = require('replace-in-file');
var Chance = require('chance');

var chance = new Chance();

const options = {

  //Single file
  files: 'users.json',

  //Replacement to make (string or regex)
  replace: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,
  with: chance.email(),

  //Specify if empty/invalid file paths are allowed (defaults to false)
  //If set to true these paths will fail silently and no error will be thrown.
  allowEmptyPaths: false,

  //Character encoding for reading/writing files (defaults to utf-8)
  encoding: 'utf8',
};

replace(options, (error, changedFiles) => {
  if (error) {
    return console.error('Error occurred:', error);
  }
  console.log('Modified files:', changedFiles.join(', '));
});
