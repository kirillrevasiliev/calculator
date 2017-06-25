//
var calculator = {

    val: 0,
    getsum: function (x, y) {
        if(!(this.isNumeric(x) && this.isNumeric(y))) return console.log("Введіть числа");
            return this.val =x + y;
        },
    getdif: function (x, y) {
        if(!(this.isNumeric(x) && this.isNumeric(y))) return console.log("Введіть числа");
            return this.val = x - y;
    },
    getmul: function (x, y) {
        if(!(this.isNumeric(x) && this.isNumeric(y))) return console.log("Введіть числа");
            return this.val = x * y;
    },
    getdiv: function (x, y) {
        if(!(this.isNumeric(x) && this.isNumeric(y))) return console.log("Введіть числа");
            return this.val = x / y;
    },

    getfunc: function(x, y, a){
        switch (a){
            case '+': this.getsum(x, y);
                break;
            case "-": this.getdif(x, y);
                break;
            case "*": this.getmul(x, y);
                break;
            case "/": this.getdiv(x, y);
                break;
            default: console.log("нипанятно!!");
            break;
        }
    },
    // функція для визначення степеню "z" числа "x"
    powloop: function(x, z){
        if(!(this.isNumeric(x) && this.isNumeric(z))) return console.log("Введіть числа");
        var i;
        var res = x;
        for(i = 1; i < z; i++){
            res = this.getmul(res, x);
        }
        return this.val = res;
    },
    // рекурсивная функція
    // переписано після прочитанної статі
    // про рекурсивні функції та їх контекст
    powrecurs: function(x, z){

        if(!(this.isNumeric(x) && this.isNumeric(z))) return console.log("Введіть числа");

        if(z != 1){
            // виклик ф-ції в рекурсії
            return x * this.powrecurs(x, z - 1);
        } else {
            return this.val = x;
        }
    },

    // для перевірки змінної на число використаємо
    // написану раніше функцію isNumeric()
    isNumeric: function(x){
        return !isNaN(parseFloat(x)) && isFinite(x);
    }

};



//