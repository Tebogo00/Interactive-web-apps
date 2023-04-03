// alex.js

const firstname = "Alex"
const surname = "Naidoo"
export const role3 = "Head of Marketing"

const display= firstname + " " + surname + " (" + role3 + ")";
document.querySelector('#alex').innerText = display;

//replaced private with const on line 3, 4 and 7
//replaced public with const and role with role3
//added semi-colons to line 7 and 8