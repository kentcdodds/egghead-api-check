var apiCheckFactory = require('api-check');

var myCheck = apiCheckFactory();

module.exports = timeoutLog;

var api = [
  myCheck.number,
  myCheck.shape({
    name: myCheck.string
  }),
  myCheck.func.optional
];

function timeoutLog(time, person, callback) {
  myCheck.throw(api, arguments);

  setTimeout(function() {
    console.log('Time is up for ' + person.name + '!');
    callback && callback(person);
  }, time);
}
