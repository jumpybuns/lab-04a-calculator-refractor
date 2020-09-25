import { add, subtract } from './mathUtils.js';

const addResults = document.getElementById('add-results');
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');

export function handleAddClick() {
    const value1 = addInput1.valueAsNumber;
    

    const value2 = addInput2.valueAsNumber;
    // console.log(value2);

    const sum = add(value1, value2);
console.log(sum);
    addResults.textContent = sum;

}


const subtractResults = document.getElementById('subtract-results');
const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');

export function handleSubtractClick() {
    const value1 = subtractInput1.valueAsNumber;
    const value2 = subtractInput2.valueAsNumber;

   
    const answer = subtract(value1, value2);

    subtractResults.textContent = answer;

}