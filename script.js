let btns = document.querySelectorAll('.number');
let inputStr = document.querySelector('.display input');
// console.log(btns);
let flag = false;

// відображення введеного числа на дисплеї
function inputNumber() {
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
             if (flag === true) {inputStr.value = ""};
            let key = btn.getAttribute('data-btn');
            if ((flag === true) && ((key === "+") || (key === "-") || (key === "*") || (key === "/"))) {
                inputStr.value = memory;
            };
            // console.log(key);
            inputStr.value = inputStr.value + key;
            flag = false;
        });
    });
}; 

inputNumber();


// очищення дисплея калькулятора
function clean() {
    let btnClean = document.querySelector('.btn-clean');
    btnClean.addEventListener('click', (ev) => {
        inputStr.value = "";
        elem = document.querySelector('.memory');
        elem.remove();
    });
};

clean();


// здійснення розрахунків
function equal () {
    let btnEqual = document.querySelector('.orange');
    btnEqual.addEventListener('click', (event) => {
        let calc = inputStr.value;
        if (calc) {
            inputStr.value = eval(calc);  
            flag = true;
            memory = inputStr.value;
            // console.log(memory);              
        };       
    });
};

equal();


// число в пам'яті калькулятора
let lettersM = document.querySelectorAll('.letter-m');
let displayInput = document.querySelector('.display');
lettersM.forEach((letterM) => {
    letterM.addEventListener('click', (e) => {
        let elem = document.createElement('div');
        elem.innerText = 'm';
        elem.classList.add('memory');
        displayInput.append(elem);
        memory = inputStr.value; 
        });
    }); 

let letterMRC = document.querySelector('.letter-mrc');
let flagMem = false;
letterMRC.addEventListener('click', (e) => {
    if (flagMem === true) {
        inputStr.value = "";
        flagMem = false;
        elem = document.querySelector('.memory');
        elem.remove();
    } else {
        inputStr.value = memory;
        flagMem = true;
    };    
});


// натискання клавіш калькулятора з клавіатури

document.onkeydown = function(event) {
    let buttons = document.querySelectorAll('.button');
    // console.log(buttons);
    if (flag === true) {inputStr.value = ""};
    buttons.forEach((button) => {
        let key = button.getAttribute('data-btn');
        // console.log(event.code);
        if ((flag === true) && ((key === "+") || (key === "-") || (key === "*") || (key === "/"))) {
            inputStr.value = memory;
        };
        if (event.key == key) {
            inputStr.value = inputStr.value + key;
            flag = false;
         };
         if (event.code === "KeyC") {
            inputStr.value = "";
         };
         if (event.code === "Equal" || event.code === "Enter") {
            inputStr.value = eval(inputStr.value);
            flag = true;
            memory = inputStr.value;
         };
    });    
};