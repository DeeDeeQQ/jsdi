// 3. Создайте конструктор - Automobile создающий объекты со свойствами color (цвет), model (модель), year (год выпуска), manufact (производитель) и методами: whatColor (позволяющий узнать цвет автомобиля) и autoInfo (позволяющий узнать модель, год выпуска, и производителя автомобиля).
// . Создайте с помощью конструктора Automobile объекты перечисленные ниже и обратитесь к их методам whatColor и autoInfo:
//     1. Nissan Skyline 2007 Красный;
// 2. Toyota Corolla 2009 Черный;
// 3. Volkswagen Golf 2009 Синий
//
// 4. Создайте конструктор - Driver наследующий свойства и методы у конструктора Automobile. Конструктор должен добавлять к функциональности свойство driver содержащее свойства name (имя хозяина автомобиля) и experience (водительский стаж) и метод driverInfo (позволяющий узнать имя и стаж хозяина автомобиля).
//
// 5. Создайте с помощью конструктора Driver объект: Дмитрий 3 Ford Focus 2010 Белый. И обратитесь к его методам whatColor, autoInfo и driverInfo.

function Automobile(color, model, year, manufact)
{
    this.color = color;
    this.model = model;
    this.year = year;
    this.manufact = manufact;
}

Automobile.prototype.whatcolor = function()
{
    return this.color;
};

Automobile.prototype.autoinfo = function ()
{
    return "Model: " + this.model + ", manufactured by " + this.manufact + " in " + this.year + " year";
};


nissan = new Automobile('Red', 'Skyline', '2007', 'Nissan');
toyota = new Automobile('black', 'Corolla', '2009', 'Toyota');
vw = new Automobile('blue', 'Golf', '2009', 'Volkswagen');

console.log(nissan.whatcolor());
console.log(nissan.autoinfo());
console.log(toyota.whatcolor());
console.log(toyota.autoinfo());
console.log(vw.whatcolor());
console.log(vw.autoinfo());

function Driver(name, experience,color, model, year, manufact) {
    Automobile.call(this, color, model, year, manufact);
    this.name = name;
    this.experience = experience;
}
Driver.prototype = Object.create(Automobile.prototype);
Driver.prototype.driverInfo = function () {
    return "Driver name " + this.name + ", his experience - " + this.experience + " years.";
};

dima = new Driver('Dmitrii', '3', 'white', 'Focus', '2010', 'Ford');

console.log(dima.whatcolor());
console.log(dima.autoinfo());
console.log(dima.driverInfo());