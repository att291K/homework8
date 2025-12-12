const newBusiness = document.getElementById("newBusiness");
const buttonAdd = document.getElementById("add");

const listBusiness = document.getElementById("list");

const buttonChooseAll = document.getElementById("chooseAll");
const buttonUnChooseAll = document.getElementById("unChooseAll");
const buttonExecuteAll = document.getElementById("executeAll");
const buttonDelAll = document.getElementById("delAll");

buttonAdd.addEventListener("click", () => {
    if (!checkValue()) return;

    const listItems = document.querySelectorAll('ol li');

    let numberId;
    if(listItems.length === 0) {
        numberId = 1;
    }
    else {
        const lastItem = listItems[listItems.length -1]
        numberId = parseInt(lastItem.getAttribute('id')) + 1;
    }

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = 'option'+numberId;
    newCheckbox.value = 'value'+numberId;
    newCheckbox.classList.add('my-checkbox');
    newCheckbox.name = 'options';

    const newLabel = document.createElement('label');
    newLabel.htmlFor = 'option'+numberId; // Связываем label с input
    newLabel.textContent = newBusiness.value;

    let item = document.createElement('li');
    item.setAttribute('id',numberId);
    item.appendChild(newCheckbox);
    item.appendChild(newLabel);

    const tab = document.createElement('label');
    tab.textContent = " \t ";
    item.appendChild(tab);

    const buttonExecute = document.createElement('buttonExecute');
    buttonExecute.textContent = "Выполнить";
    buttonExecute.classList.add('my-button');
    buttonExecute.addEventListener('click', () => {
        item.style.textDecoration = 'line-through';
        item.style.color = 'green';
    });
    item.appendChild(buttonExecute);
    const buttonDel = document.createElement('buttonDel');
    buttonDel.textContent = "Удалить";
    buttonDel.classList.add('my-button');
    buttonDel.addEventListener('click', () => {
        listBusiness.removeChild(item);
    });
    item.appendChild(buttonDel)
    listBusiness.appendChild(item);

})

buttonChooseAll.addEventListener("click", () => {
    const listItems = document.querySelectorAll('ol li');
    for (const item of listItems) {
        const checkedBox = item.querySelector('input[type="checkbox"]');
        checkedBox.checked = true;
    }
    setHidden();
})
buttonUnChooseAll.addEventListener("click", () => {
    const listItems = document.querySelectorAll('ol li');
    for (const item of listItems) {
        const checkedBox = item.querySelector('input[type="checkbox"]');
        checkedBox.checked = false;
    }
    setHidden();
})

buttonExecuteAll.addEventListener("click", () => {
    const listItems = document.querySelectorAll('input[type="checkbox"]:checked');
    for (const item of listItems) {
        let itemParent = document.getElementById(item.parentElement.id);
        itemParent.style.textDecoration = 'line-through';
        itemParent.style.color = 'green';
    }
})

buttonDelAll.addEventListener("click", () => {
    const listItems = document.querySelectorAll('input[type="checkbox"]:checked');
    for (const item of listItems) {
        let element = item.parentElement;
        listBusiness.removeChild(element);
    }
    setHidden();
        //while (listBusiness.firstChild) {
        //    listBusiness.removeChild(listBusiness.firstChild);
        //}
})

listBusiness.addEventListener('change', function() {
    setHidden();
});

function setHidden(){
    const listItems = document.querySelectorAll('input[type="checkbox"]:checked');
    if (listItems.length > 0) {
        buttonUnChooseAll.hidden = false;
        buttonExecuteAll.hidden = false;
        buttonDelAll.hidden = false;
    } else {
        buttonUnChooseAll.hidden = true;
        buttonExecuteAll.hidden = true;
        buttonDelAll.hidden = true;
    }
}

function checkValue(){
    if (newBusiness.value.trim() === "") {
        alert("Текст не может быть пустым!");
        return false;
    }
    return true;
}


