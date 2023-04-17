// the variable names cannot start with a number so I changed the order of the number to the end of a variable.
// added the querySelector() to select elements by their class names and data-key attributes.
// There is a change in variable naming conventions like `root1`, `biscuits1` to make the variable names more descriptive and meaningful.
// added ('.biscuits .count') to select the relevant elements within the HTML document.
const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = root1.querySelector('.biscuits .count');
const donuts1 = root1.querySelector('.donuts .count');
const pancakes1 = root1.querySelector('.pancakes .count');
const status1 = root1.querySelector('.status dd');

const root2 = document.querySelector('[data-key="order2"]');
const biscuits2 = root2.querySelector('.biscuits .count');
const donuts2 = root2.querySelector('.donuts .count');
const pancakes2 = root2.querySelector('.pancakes .count');
const status2 = root2.querySelector('.status dd');

const root3 = document.querySelector('[data-key="order3"]');
const biscuits3 = root3.querySelector('.biscuits .count');
const donuts3 = root3.querySelector('.donuts .count');
const pancakes3 = root3.querySelector('.pancakes .count');
const status3 = root3.querySelector('.status dd');


// added the textContent property to set the values of the elements based on the corresponding data attributes.
// added ternary operator (? : ) is used to check the value of the "data-delivered" attribute and set the text content accordingly.
// added  the textContent property to each of the variables to set to the value of a corresponding data-* attribute on the root element.
/* The dataset property is used to access the data attributes, and the ternary operator is used to set the text content
of the status variables based on the value of the data-delivered attribute.
*/
biscuits1.textContent = root1.dataset.biscuits;
donuts1.textContent = root1.dataset.donuts;
pancakes1.textContent = root1.dataset.pancakes;
status1.textContent = root1.dataset.delivered === "true" ? "Delivered" : "Pending";

biscuits2.textContent = root2.dataset.biscuits;
donuts2.textContent = root2.dataset.donuts;
pancakes2.textContent = root2.dataset.pancakes;
status2.textContent = root2.dataset.delivered === "true" ? "Delivered" : "Pending";

biscuits3.textContent = root3.dataset.biscuits;
donuts3.textContent = root3.dataset.donuts;
pancakes3.textContent = root3.dataset.pancakes;
status3.textContent = root3.dataset.delivered === "true" ? "Delivered" : "Pending";









