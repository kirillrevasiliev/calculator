(function () {

    var val;
    var container = document.getElementById('calculator');
    var btns = document.getElementById('calculatorBtns');
    var display = document.getElementsByClassName('display')[0];
    // container.onclick = calcClick;
    //btns.onclick = btnClick;

    //display.onkeydown = dislpayCheck;
    function btnClick(event){
        var element = event.target;
        var first = element.dataset.val;
        if(first === 'C'){
            display.value = '';
            return;
        } else if(first === '='){
            var str = display.value;
            display.value = parseString(str);
            console.log(display.value);
            return;
        }
        display.value += element.dataset.val;
        // console.log(event.target.dataset);
    };


    function parseString(str){
        var lenght = str.length;
        var i = 0;
        var first = "";
        var second = "";
        var operator;
        while(i < lenght){
            if(isNumeric(str[i])){
                first += str[i];
                if(isNumeric(str[i+1])){
                    i++;
                    continue;
                }
                i++;
            } else {
                operator = str[i];
                if(isNumeric(str[i+1])){
                    i++;
                    while(isNumeric(str[i])){
                        second += str[i];
                        i++;
                    }
                    first = getfunc(+first, +second, operator);
                    second = "";
                }
            }
        }
        return first;
    };

    function isNumeric(x){
        return !isNaN(parseFloat(x)) && isFinite(x);
    };

    function isNumForTwo(x, y){
        if(isNumeric(x) && isNumeric(y)){
            return true;
        } else {
            return false;
        }
    };

    function getfunc(x, y, a){
        var val = 0;
        switch (a){
            case '+': val = calculator.getsum(x,y);
                return val;
                break;
            case "-": val = x - y;
                return val;
                break;
            case "*": val = x * y;
                return val;
                break;
            case "/": val = x / y;
                return val;
                break;
            default: myerror;
                break;
        }
    };

    var calculator = {

        getsum: function(x, y) {
            if(!isNumForTwo(x, y)) return myerror;
            return val = x + y;
        },
        getdif: function (x, y) {
            if(!isNumForTwo(x, y)) return myerror;
            return val = x - y;
        },
        getmul: function (x, y) {
            if(!isNumForTwo(x, y)) return myerror;
            return val = x * y;
        },
        getdiv: function (x, y) {
            if(!isNumForTwo(x, y)) return myerror;
            return val = x / y;
        },

        // функція для визначення степеню "z" числа "x"
        powloop: function(x, z){
            if(!(isNumForTwo(x, z))) return console.log("Введіть числа");
            var i;
            var res = x;
            for(i = 1; i < z; i++){
                res = this.getmul(res, x);
            }
            return val = res;
        },
        // рекурсивная функція
        // переписано після прочитанної статі
        // про рекурсивні функції та їх контекст
        powrecurs: function(x, z){

            if(!(isNumeric(x) && isNumeric(z))) return console.log("Введіть числа");

            if(z != 1){
                // виклик ф-ції в рекурсії
                return x * this.powrecurs(x, z - 1);
            } else {
                return this.val = x;
            }
        },
        isNumeric: function(x){
            return !isNaN(parseFloat(x)) && isFinite(x);
        }
    };



    window.calc = calculator;

})();