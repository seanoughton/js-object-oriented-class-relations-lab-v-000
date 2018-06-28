let driverId = 0;
let store = [drivers:[]]
class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
  };
};
