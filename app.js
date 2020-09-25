import { handleAddClick, handleSubtractClick } from './clickHandlers.js';

const addButton = document.getElementById('add-button');

const subtractButton = document.getElementById('subtract-button');



addButton.addEventListener('click', handleAddClick);

subtractButton.addEventListener('click', handleSubtractClick);

