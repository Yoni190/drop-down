import {DropDown} from "./drop.js";

const dropButton = document.querySelector('#drop');
const body = document.querySelector('body');
const list = document.querySelector('li');



const dropObject = new DropDown(dropButton, list, body);
dropObject.addFunctionality();


console.log("Hello")




