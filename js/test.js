'use strict';
// es feature: block-scoped "let" declaration
const sentences = [
	{ subject: 'JavaScript', verb: 'is', object: 'great' },
	{ subject: 'Elephants', verb: 'are', object: 'large' }
];

// es6 feature: object destructing
function say({ subject, verb, object}) {
	// es6 feature: tempalte strings
	// note that quotes below are backticks (`), not single quotes(')
	console.log(`${subject} ${verb} ${object}`);
}
// es6 feature: for..of
for(let s of sentences) {
	say(s);
}