const _ = require('./utils.js');
const tokenizer = require('./Tokenizer.js');
const lexer = require('./Lexer.js');
const parser = require('./Parser.js');

const jsonParser = _.pipe(tokenizer, lexer, parser);

console.dir(
  jsonParser(
    '["1a3",[null,false,["11",[112233],{"easy" : ["hello", {"a":"a"}, "world"]},112],55, "99"],{"a":"str", "b":[912,[5656,33],{"key" : "innervalue", "newkeys": [1,2,3,4,5]}]}, true]'
  ),
  { depth: null }
);
