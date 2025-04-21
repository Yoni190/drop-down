
export class DropDown {
    constructor(elements){
        this.elements = elements;
    }

    showList(){
        this.elements.style.display = "block";
    }

    hideList(){
        this.elements.style.display = "none";
    }
}


const list = document.querySelector("li")
const drop = new DropDown(list)

drop.showList()
drop.hideList()