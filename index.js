// just giving me some space...
console.log('\n------\n');


var timeoutLog = require('./timeoutLog');

var person = {
  name: 'Jane'
};

timeoutLog(300, {name: 'Joe'}, function(thePerson) {
  console.log(
    'Person is the same? ' + (person === thePerson)
  );
});

