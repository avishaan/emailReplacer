// var replace = require('replace-in-file');
var fs = require('fs');
var Chance = require('chance');
var inputJSON = require('./users.json');

var chance = new Chance();


inputJSON.forEach(function(input){
  input.emails[0].address = chance.email();
  input.profile ? input.profile.user = chance.first() : null;
});

fs.writeFile('./output.json', JSON.stringify(inputJSON, null, 2));
