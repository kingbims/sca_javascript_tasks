let addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
let container = document.querySelector('.container')

class item{
    constructor(itemName){
        //Create the item div
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item')

        let updateButton = document.createElement('button');
        updateButton.innerHTML = "UPDATE";
        updateButton.classList.add('updateButton');

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = "DELETE";
        deleteButton.classList.add('deleteButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(updateButton);
        itemBox.appendChild(deleteButton);

        updateButton.addEventListener('click', () => this.update(input));

        deleteButton.addEventListener('click', () => this.delete(itemBox));

    }

    update(input){
        input.disabled = !input.disabled;
    }

    delete(item){
        container.removeChild(item);
    }
}

check = () => {
    if(input.value != ""){
        new item(input.value);
        input.value = "";
   }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})