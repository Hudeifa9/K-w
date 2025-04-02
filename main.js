let name1 = document.querySelector('#name');
let AkhH = document.querySelector('#AkhH');
let AkhD = document.querySelector('#AkhD');
let reset = document.querySelector('#reset');
let submit = document.querySelector('#submit');
let result = document.querySelector('#result');
let nameHelper = document.querySelector('#nameHelper');
let AkhHHelper = document.querySelector('#AkhHHelper');
let AkhDHelper = document.querySelector('#AkhDHelper');
let table = document.querySelector('#table tbody');
const rate = 0.41;
let total1 = document.querySelectorAll('total1')




submit.addEventListener('click', function (event) {
    event.preventDefault();

    let isValid = checkEmpty(name1) && checkEmpty1(AkhH) && checkEmpty2(AkhD);

    if (isValid) {
        
        regesterUser(name1, AkhH, AkhD);
        clear();
        
        
    }
});




table.addEventListener('click', removeRow) 
   


function checkEmpty(filled) {
    if (filled.value.trim() === '') {
        filled.classList.add('border', 'border-danger');
        nameHelper.innerHTML = 'Please fill the name field';
        nameHelper.style.color = 'red';
        return false;
    } else {
        filled.classList.remove('border', 'border-danger');
        filled.classList.add('border', 'border-success');
        nameHelper.innerHTML = '';
        return true;
    }
}

function checkEmpty1(filled) {
    if (filled.value.trim() === '') {
        filled.classList.add('border', 'border-danger');
        AkhHHelper.innerHTML = 'Please fill the AkhH field';
        AkhHHelper.style.color = 'red';
        return false;
    } else {
        filled.classList.remove('border', 'border-danger');
        filled.classList.add('border', 'border-success');
        AkhHHelper.innerHTML = '';
        return true;
    }
}

function checkEmpty2(filled) {
    if (filled.value.trim() === '') {
        filled.classList.add('border', 'border-danger');
        AkhDHelper.innerHTML = 'Please fill the AkhD field';
        AkhDHelper.style.color = 'red';
        return false;
    } else {
        filled.classList.remove('border', 'border-danger');
        filled.classList.add('border', 'border-success');
        AkhDHelper.innerHTML = '';
        return true;
    }
}


function regesterUser(name1, AkhH, AkhD) {
    let rowCount = table.rows.length + 1;
    let sub = parseFloat(AkhD.value) - parseFloat(AkhH.value);
    let total = sub * rate;

    let user = `
        <tr>
            <td>${rowCount}</td>
            <td>${name1.value}</td>
            <td>${AkhH.value}</td>
            <td>${AkhD.value}</td>
            <td id="total1">$${total.toFixed(2)}</td>
            <td><button class="btn btn-danger delete-btn" id="btn"> <i class="fa fa-trash"></i> Delete</button></td>
        </tr>
    `;

    table.innerHTML += user;
    result.textContent = `$${total.toFixed(2)}`;
}


reset.addEventListener('click', clear);

function clear() {
    name1.value = '';
    AkhH.value = '';
    AkhD.value = '';
}

function isDigit(inputField) {
    inputField.addEventListener('keypress', function(event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
            inputField.classList.add('border', 'border-danger');
            AkhHHelper.innerHTML = 'Just for numbers only';
            AkhHHelper.style.color = 'red';
        } else {
            inputField.classList.remove('border', 'border-danger');
            AkhHHelper.innerHTML = '';
        }
    });
}

function isDigit1(inpu1) {
    inpu1.addEventListener('keypress', function(event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
            inpu1.classList.add('border', 'border-danger');
            AkhDHelper.innerHTML = 'Just for numbers only';
            AkhDHelper.style.color = 'red';
        } else {
            inpu1.classList.remove('border', 'border-danger');
            AkhDHelper.innerHTML = '';
        }
    });
}
isDigit(AkhH);
isDigit1(AkhD);



function removeRow(event){
    if(event.target.id === 'btn'){
        event.target.parentElement.parentElement.remove();
    }
}
