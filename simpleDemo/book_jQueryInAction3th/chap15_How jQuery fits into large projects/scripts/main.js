require(['Car'], function (Car) {
    console.log(Car instanceof Function);
    var car = new Car();
    alert(car.getOwner());
});