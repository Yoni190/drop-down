import {DropDown} from "./drop.js";

const dropButton = document.querySelector('#drop');
const list = document.querySelector('li');
const dropObject = new DropDown(dropButton, list);
dropObject.addShowList();





