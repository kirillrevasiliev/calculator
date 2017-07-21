(function(){

    var buttons = document.getElementById('calculatorBtns');
    var display = document.getElementsByClassName('display')[0];

    buttons.onclick = butClick;

    function butClick(event){

        var element = event.target;
        var data = element.dataset.val;
        if(data === 'C'){
            display.value = '';
            return;
        } else if(data === '='){
            var str = display.value;
            display.value = parseNewString(str);
            return;
        }
        console.log(display.value);
        display.value += element.dataset.val;
    }

    function parseNewString(string){

        var str = string;
        var buffer = [];

        while(str.length > 0){
            var number = parseFloat(str);
            if(isNumeric(number)){
                buffer.push(number);
                str.replace(number, '');
                debugger;
                return;
            }
            if(isOperator(str[0])){
                buffer.push(str[0]);
                str.replace(str[0], '');
                debugger;
            } else {
                str.replace(str[0], '');
            }
        }
        debugger;
        return calculate(buffer);
    }

    function isOperator(x){
        if(x === '+' || x === '-' ||
            x === '*' || x === '/'){
            return true;
        } else {
            return false;
        }

    }

    function calculate(arr){
        var result = arr;
        
        return result;
    }

    function isNumeric(x){
        return !isNaN(parseFloat(x)) && isFinite(x);
    };

})();