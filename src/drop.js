export class DropDown {
    constructor(button, elements, visible = false){
        this.button = button;
        this.elements = elements;
        this.visible = visible;
    }

    addFunctionality(){
        this.button.addEventListener('click', ()=>{
            if(!this.visible){
                this.elements.style.display = "block";
                this.visible = true;
            }
            else if(this.visible){
                this.elements.style.display = "none";
                this.visible = false;
            }
            
        })
    }
}
