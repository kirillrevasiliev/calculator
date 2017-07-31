
var car = function (name, model, color, year, engine, power){
    this.name = name;
    this.model = model;
    this.color = color;
    this.year = year;
    this.engine = engine;
    this.power = power;
    console.log('The car name is ' + this.name
        + ', model -' + this.model
        + ', color -' + this.color
        + ', year - ' + this.year
        + ', engine - v' + this.engine
        + ', power - ' + this.power + 'hp');
};
var lamborghini = new car('Lamborghini', 'Avendator', 'Black-orange', '2017', 12, 800);
var porsche = new car('Porsche', '911 Turbo', 'Dark-grey', '2008', 6, 540);
var bugatti = new car('Lamborghini', 'Veyron Grand Sport', 'Middle East Green', '2009', 12, 740);
var chevrolet = new car('Chevrolet', 'Cruze Station Wagon', 'Dark-Red', '2010', 4, 150);
var daewoo = new car('Daawoo', 'Lanos', 'Brown', '2017', 4, 106);

console.table(lamborghini);
console.table(porsche);
console.table(bugatti);
console.table(chevrolet);
console.table(daewoo);
