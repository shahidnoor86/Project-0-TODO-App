const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemId = 1;

function newTodo() {
  var item = prompt("Please enter new item", "");
  if (item) {
	let id = itemId++;
	const currentQuantity = parseInt(itemCountSpan.innerText);
	const uncheckedItems = parseInt(uncheckedCountSpan.innerText);
	
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.name = "name";
	checkbox.value = "value";
	checkbox.id = "chkBox_" + id;
	checkbox.classList.add(classNames.TODO_CHECKBOX);
	checkbox.addEventListener('click', handleCheck, false);


	var label = document.createElement('label')
	label.htmlFor = "chkBox_"+ id;
	label.classList.add(classNames.TODO_TEXT);
	label.appendChild(document.createTextNode(item));
	
	var itemNode = document.createElement("li");

	itemNode.appendChild(checkbox);
	itemNode.appendChild(label);
	itemNode.classList.add(classNames.TODO_ITEM);
	list.appendChild(itemNode);
	itemCountSpan.innerText = currentQuantity + 1;
	uncheckedCountSpan.innerText = uncheckedItems + 1;
  }
}

function handleCheck(event){
	console.log(event);
	const uncheckedItems = parseInt(uncheckedCountSpan.innerText);
	if(event.target.checked) {
		uncheckedCountSpan.innerText = uncheckedItems - 1;
	}
	else {
		uncheckedCountSpan.innerText = uncheckedItems + 1;
	}
}
