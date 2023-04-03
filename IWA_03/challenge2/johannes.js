// johannes.js

const firstname = "Johannes"
const surname = "Potgieter"
export const role2 = "Intern"

const display= firstname + " " + surname + " (" + role2 + ")";
document.querySelector('#johannes').innerText = display;

//replaced private with const on line 3, 4 and 7
//replaced public with const and role with role2
//added semi-colons to line 7 and 8