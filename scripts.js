const itemInput = document.querySelector('.itemInput');
const inputButton = document.querySelector('.inputButton');
const list = document.querySelector('.list');

inputButton.addEventListener('click', addItem);

function addItem(event){
    //stop form submission
    event.preventDefault();

    //creates the item div
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    //creates the item li
    const newItem = document.createElement('li');
    newItem.innerText= 'hey';
    newItem.classList.add('itemToDo');
    itemDiv.appendChild(newItem);

    //creates the 'done' button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("completeButton");
    itemDiv.appendChild(completedButton);

    //creates the 'delete' button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.classList.add("deleteButton");
    itemDiv.appendChild(deleteButton);

    //adds new div to the list
    list.appendChild(itemDiv);
}