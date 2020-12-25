let valor;
let result;

function button(num){
    valor = document.calc.display.value += num;
}

function reset() {
    document.calc.display;
}

function calculate(){
    result = eval(valor);
    document.calc.display.value = result;
}
