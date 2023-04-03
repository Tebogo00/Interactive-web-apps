// scripts.js

import {company} from './configuration.js';
import {year} from './configuration.js';

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;

console.log(message)

//edited configuration variable
//added curly brackets
//added semicolon to statements on line 6 and 7
//added console.log so that the message on line 6 run