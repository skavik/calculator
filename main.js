let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let summ = document.querySelector('#summ');
let diff = document.querySelector('#diff');
let multipli = document.querySelector('#multipli');
let division = document.querySelector('#division');
let res = document.querySelector('#res');
let clear = document.querySelector('#clear');

summ.addEventListener('click', () => {
    console.log(res.value);
    return res.value = +number1.value + +number2.value;
    
});

diff.addEventListener('click', () => {
    return res.value = +number1.value - +number2.value
});

multipli.addEventListener('click', () => {
    return res.value = +number1.value * +number2.value
});

division.addEventListener('click', () => {
    return res.value = +number1.value / +number2.value
})

clear.addEventListener('click', () => {
    number1.value = undefined;
    number2.value = undefined;
    res.value = undefined;
})

let numb = document.querySelectorAll('.numb');
let display = document.querySelector('#display');
let resut = document.querySelector('#resut');
let reset = document.querySelector('#reset');

for (i=0; i<numb.length; i++) {
    numb[i].addEventListener('click', function() {
        display.value += this.value
    })
};

resut.addEventListener('click', () => {
    display.value = eval(display.value);
})

reset.addEventListener('click', () => {
    display.value = '';
})

