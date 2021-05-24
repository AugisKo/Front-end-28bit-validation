const Validation = require('./js/Validation');

const v = new Validation();

//console.log(v.isValidMessage('Some message'), true);
//console.log(v.isValidMessage(12345), false);
//console.log(v.isValidMessage('12345'), true);
//console.log(v.isValidMessage(true), false);
//console.log(v.isValidMessage(false), false);
//console.log(v.isValidMessage(''), false);
//console.log(v.isValidMessage('sdfsd'), true);
//console.log(v.isValidMessage([]), false);
//console.log(v.isValidMessage([1221, 235]), false);
//console.log(v.isValidMessage('%$^%$^'), true);
//console.log(v.isValidMessage(['bla, bla']), false);

//console.log(v.isValidFirstName('Vardenis'), true);
//console.log(v.isValidLastName('Pavardenis'), true);
//console.log(v.isValidLastName(123), false);
//console.log(v.isValidLastName('t'), false);
//console.log(v.isValidEmail('sdfkjl@example.com'), true);
//console.log(v.isValidPhoneNumber(+37068256565), true);
console.assert(v.isValidMonthName('Sausis', 'lt') === true, 'ERROR');
console.assert(v.isValidMonthName('January', 'en') === true), 'ERROR';
console.assert(v.isValidWeekdayName('Pirmadienis', 'lt') === true, 'ERROR');
console.assert(v.isValidWeekdayName('Monday', 'en') === true, 'ERROR');
//console.log(v.isValidPersonID(39912311234), true);
