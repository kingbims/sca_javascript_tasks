var inputText = document.getElementById("txt")
    items = document.querySelectorAll("#list li"),
    tab = [];

                
for(var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
}
                
 for(var i = 0; i < items.length; i++){
    items[i].addEventListener('click', () => {
        index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + " INDEX = " + index)

        inputText.value = this.innerHTML;
    });
                
}


function refreshArray() {
    tab.length = 0;
    items = document.querySelectorAll("ol li");
    for(var i = 0; i < items.length; i++){
        tab.push(items[i].innerHTML);
    }

}

const add = document.querySelector('.add');
add.addEventListener('click', () =>{
    var listNode = document.getElementById("list"),
    textNode = document.createTextNode(inputText.value),
    liNode = document.createElement("LI");

    liNode.appendChild(textNode);
    listNode.appendChild(liNode);
    refreshArray()


    liNode.addEventListener('click', () => {
        index = tab.indexOf(liNode.innerHTML);
        console.log(liNode.innerHTML + " INDEX = " + index)

        inputText.value = liNode.innerHTML;
                    
    });
});

const edit = document.querySelector('.edit');
edit.addEventListener('click', () => {
    items[index].innerHTML = inputText.value;
    refreshArray()
})

const remove = document.querySelector('.remove');
remove.addEventListener('click', function() {
    refreshArray();
    if(items.length > 0){
        items[index].parentNode.removeChild(items[index]);
        inputText.value = "";
    }
                
});