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

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
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

  setPassenger(passenger) {
    this.passengerId = passenger.id
  };


  passenger(){
    return store.passengers.find(passenger => passenger.id === this.passengerId);
    //return store.passengers.find(function(passenger){
      //return passenger.id === this.passengerId;
    //}); DON'T KNOW WHY THIS IS NOT WORKING
    //return store.passengers.find(passenger => {
    //  return passenger.id === this.passengerId;
    //});
  }

  driver() {
    return store.drivers.find(driver => driver.id === this.driverId);
  }

};
