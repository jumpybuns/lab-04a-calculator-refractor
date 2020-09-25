import { handleAddClick, handleSubtractClick, handleMultiplyClick } from './clickHandlers.js';

const addButton = document.getElementById('add-button');

const subtractButton = document.getElementById('subtract-button');

const multiplyButton = document.getElementById('multiply-button');



addButton.addEventListener('click', handleAddClick);

subtractButton.addEventListener('click', handleSubtractClick);

multiplyButton.addEventListener('click', handleMultiplyClick);


