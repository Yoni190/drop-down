export class DropDown {
    constructor(button, elements, visible = false){
        this.button = button;
        this.elements = elements;
        this.visible = visible;
    }

    addShowList(){
        this.button.addEventListener('click', ()=>{
            this.elements.style.display = "block";
        })
    }

    hideList(){
        this.elements.style.display = "none";
    }

}
