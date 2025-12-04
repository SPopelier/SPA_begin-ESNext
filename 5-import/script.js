//5-1 Import

import defaultFunction, { hello, showError } from './functions.js';
import {sum, sub, multiply, divide, pow } from './math.js';

hello();
showError();
defaultFunction();
sum();
sub();
multiply();
divide();
pow();

// 5-2 Export
const [a, b] = [7, 9];
console.log(sum(a, b));
