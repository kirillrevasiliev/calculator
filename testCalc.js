
(function(){

    var buttons = document.getElementById('calculatorBtns');
    var display = document.getElementsByClassName('display')[0];
    if(display.value === '') display.value = '0';

    buttons.onclick = butClick;

    function butClick(event){
        var element = event.target;
        var data = element.dataset.val;
        console.log(data);
        if(data === 'C'){
            display.value = '0';
            console.log("no");
            return;
        } else if(data === '='){
            var string = display.value;
            console.log("str = " + string);
            display.value = parseNewString(string);
            return;
        }
        if(data === '0' && display.value === '0' && display.value.length === 1){
            display.value = '0';
            return;
        }

        // console.log(display.value);
        display.value += element.dataset.val;
    }

    function parseNewString(string){

        var stringParse = string;
        var buffer = [];

        while(stringParse.length > 0){
            debugger;
            var number = parseFloat(stringParse);
            if(isNumeric(stringParse[0])){
                buffer.push(number);
                debugger;
                stringParse = stringParse.replace(number, '');
                //return stringParse;
                continue;

            }
            if(isOperator(stringParse[0])){
                debugger;
                buffer.push(stringParse[0]);
                stringParse = stringParse.replace(stringParse[0], '');

            } else {
                debugger;
                stringParse = stringParse.replace(stringParse[0], '');
            }
        }
        debugger;
        console.log("str = " + buffer);
        return calculate(buffer);
    }

    function isOperator(operator){
        return operator === '+' || operator === '-' ||
            operator === '*' || operator === '/';

    }


    function calculate(buffer){
        // написати функцію, яка будет
        // вибирати з массиву числа та оператори
        // та обчислювати
        var arrayBuffer = buffer;
        var first, second, operator;
        while(arrayBuffer.length > 0){
            if(isNumeric(arrayBuffer[0])){
                first = arrayBuffer.shift();
            }
            if(isOperator(arrayBuffer[0])){
                operator = arrayBuffer.shift();
                if(isNumeric(arrayBuffer[0]) || first !== 0){
                    second = arrayBuffer.shift();
                    first = functionCalculator(first, second, operator);
                }
            }
        }
        return first;
    }

    function functionCalculator(first, second, operator) {
        switch (operator){
            case '+': return getSum(first, second);
                break;
            case '-': return getDif(first, second);
                break;
            case '/': return getDiv(first, second);
                break;
            case '*': return getMul(first, second);
                break;
            default: return "error";
                break;
        }
    }

    function getSum(x, y) {
        return x + y;
    }

    function getDif(x, y) {
        return x - y;
    }

    function getMul(x, y) {
        return x * y;
    }

    function getDiv(x, y) {
        return x / y;
    }

    function isNumeric(variable){
        return !isNaN(parseFloat(variable)) && isFinite(variable);
    }

})();
