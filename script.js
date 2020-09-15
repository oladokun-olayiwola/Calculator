const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const mult = document.getElementById('mult')
const divide = document.getElementById('divide')
const equals = document.getElementById('equals')
const del = document.getElementById('delete')
const dot = document.getElementById('dot')
const cancel = document.getElementById('cancel')
let screen = document.getElementById('screen');

// Event Listeners
cancel.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    let val = screen.innerText
    screen.innerText = val.substring(0, val.length - 1);
});
//

del.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    screen.innerText = "";
});

//          1

one.addEventListener('click', function(){
    const one = document.getElementById('one')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' +  one.value;
});

//              2

two.addEventListener('click', function(){
    const two = document.getElementById('two')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' +  two.value;
});

//                  3

three.addEventListener('click', function(){
    const three = document.getElementById('three')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' +  three.value;
});

//                      4                

four.addEventListener('click', function(){
    const four = document.getElementById('four')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' +  four.value;
});

//                          5

five.addEventListener('click', function(){
    const five = document.getElementById('five')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' +  five.value;
});

//                              6

six.addEventListener('click', function(){
    const six = document.getElementById('six')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' +  six.value;
});

//                                  7

seven.addEventListener('click', function(){
    const seven = document.getElementById('seven')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' +  seven.value;
});

//                                      8

eight.addEventListener('click', function(){
    const eight = document.getElementById('eight')
    let screen = document.getElementById('screen')
    screen.innerText =screen.innerText + '' +  eight.value;
});

//                                          9

nine.addEventListener('click', function(){
    const nine = document.getElementById('nine')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' + nine.value;
});

//                                              0

zero.addEventListener('click', function(){
    const zero = document.getElementById('zero')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' +  zero.value;
});

//                                                  +

plus.addEventListener('click', function(){
    const plus = document.getElementById('plus')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' + plus.value;
});

//                                                      -

minus.addEventListener('click', function(){
    const minus = document.getElementById('minus')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' + minus.value;
});

//                                                          *

mult.addEventListener('click', function(){
    const mult = document.getElementById('mult')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' + mult.value;
});

//                                                              /

divide.addEventListener('click', function(){
    const divide = document.getElementById('divide')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' + divide.value;
});

//

dot.addEventListener('click', function(){
    const dot = document.getElementById('dot')
    let screen = document.getElementById('screen')
    screen.innerText = screen.innerText + '' + dot.value;
});

//                                                                  =

equals.addEventListener('click', function(){
    const equals = document.getElementById('equals')
    let screen = document.getElementById('screen')
    screen.innerText = eval(screen.innerText);
});


