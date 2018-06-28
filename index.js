let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {drivers:[],passengers:[],trips:[]};

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  };
};

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  };
};

class Trip {
  constructor(driver,passenger) {
    this.id = ++tripId;
    if (driver){
      this.driverId = driver.id
    };
    if (passenger){
      this.passengerId = passenger.id
    };

    store.trips.push(this);
  };

  passenger(){

    //a trip has a passengerId
    //you want to be able to use that trip.passengerId to get the passenger object from the store
    //

    return this.driverId;
    //return store.passengers.find(function(passenger) {
      //return passenger.id === this.passengerId
    //});
  };

};
