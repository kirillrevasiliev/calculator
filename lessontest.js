/**
 * Created by Крик on 28.07.2017.
 */
//
function showChar(name, model, color, year, engine, power){
    console.log('The car name is ' + this.name
        + ', model -' + this.model
        + ', color -' + this.color
        + ', year - ' + this.year
        + ', engine - ' + this.engine
        + ', power - ' + this.power + 'hp');
};
var lamba = {
    name: 'Lamborghini',
    model: 'Bugatti',
    color: 'Dark-yellow',
    year: 2018,
    engine: 12,
    power: 888};

showChar.call(lamba);
// --------------
var car = function (name, model, color, year, engine, power){
        this.name = name;
        this.model = model;
        this.color = 'Dark-yellow';
        this.year = 2018;
        this.engine = 12;
        this.power = 888;
        console.log('The car name is ' + this.name
            + ', model -' + this.model
            + ', color -' + this.color
            + ', year - ' + this.year
            + ', engine - ' + this.engine
            + ', power - ' + this.power + 'hp');
};
var lamborghini = new car('Lamborghini', 'Bugatti');
// ---------------
// method borrowing - оддалживание метода
var arrLamba = ['Lamborghini', 'Verona', 450,'v8', 'turbo'];
function printArguments() {
    //
    arguments.join = [].join;
    // метод join
    /*function join(separator) {
     if (!this.length) return '';

     var str = this[0];

     for (var i = 1; i < this.length; i++) {
     str += separator + this[i];
     }

     return str;
     }*/
    var args = arguments.join(':');
    console.log(args);
}
printArguments(arrLamba);
//
arrLamba.join = [].join;
console.table(arrLamba.join(':'));
// безопасный метод с помощью call
function printArgs(){
    var meth = [].join;
    var argsArr = meth.call(arguments, ':');
    console.table(argsArr);
}
printArgs(arrLamba);
//