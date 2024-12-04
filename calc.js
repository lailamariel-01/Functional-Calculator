let display=document.getElementById('display');

function append(value){
    // alert(value);
    // alert("1")
    display.value += value;
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    display.value = eval(display.value);
}

function clear1(){
    display.value='';
}