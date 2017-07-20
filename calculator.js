(function(){

    // змінна для запису тимчасових результатів
    val: 0;
    // змінна для виводу помилки
    myError : "Ви ввели неправильні аргументи";

    // для перевірки змінної на число використаємо
    // написану раніше функцію isNumeric()
    function isNumeric(x){
        return !isNaN(parseFloat(x)) && isFinite(x);
    };
    // напишемо ф-цію для перевірки двох змінних на число,
    // якщо функція повертає true - значить обидві змінні це число
    function isNumForTwo(x, y){
        if(isNumeric(x) && isNumeric(y)){
            return true;
        } else {
            return false;
        }
    };

    //
    function getfunc(x, y, a){
        var val = 0;
        switch (a){
            case '+': val = x + y;
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

    getsum: function (x, y) {
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

function parsestr(str){
    // визначаємо довжину рядка
    var lenght = str.length;
    // ітератор
    var i = 0;
    // змінна для першого аргументу

    var first = "";
    // змінна для другого елементу
    var second = "";
    // змінна для символу оператору
    var operator;
    // поки ітератор менший або дорівнює
    while(i < lenght){
        // якщо символ цифра
        if(isNumeric(str[i])){
            debugger;
            // записуємо символ в строку
            first += str[i];
            //перевіряємо чи наступний символ цифра
            if(isNumeric(str[i+1])){
                debugger;
                // якщо так продовжуємо цикл
                i++;
                continue;
            }
            i++;
        // якцщо сивол не цифра. записуємо його в змінну оператору
        } else {
            operator = str[i];
            debugger;
            // якщо наступний символ цифра
            if(isNumeric(str[i+1])){
                i++; // піднімаємо ітератор на одиницю
                // поки наступний символ цифра
                while(isNumeric(str[i])){
                    // добавляємо його в змінну для другого аргументу
                    second += str[i];
                    // піднімаємо ітератор на одиницю
                    i++;
                    debugger;
                }
                // проводимо підрахунок і записуємо результат в першу змінну
                first = getfunc(+first, +second, operator);
                // обнуляємо другу змінну
                second = "";
                debugger;
            }
        }
    }
    // повертаємо результат
    return first;
};

function isNumeric(x){
    return !isNaN(parseFloat(x)) && isFinite(x);
};

function getfunc(x, y, a){
    var val = 0;
    switch (a){
        case '+': val = x + y;
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