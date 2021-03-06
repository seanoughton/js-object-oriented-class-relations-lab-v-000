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

//returns all of the trips that a driver has taken
  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  };

//returns all of the passengers that a driver has taken on a trip
  passengers(){
    return this.trips().map(trip => trip.passenger());
  };
};

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  };

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  };

//returns all of the drivers that has taken a passenger on a trip
  drivers(){
    return this.trips().map(trip => trip.driver());
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
