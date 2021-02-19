import { Monocycle, Motorcycle, Car, Trailer } from "./Vehicle";

class VehicleFactory {
  createVehicle(wheeler){
    if(wheeler === 1) {
      return new Monocycle();
    }
    
    if(wheeler === 2) {
      return new Motorcycle();
    }
    
    if(wheeler === 4) {
      return new Car();
    }
    
    if(wheeler === 6) {
      return new Trailer();
    }
    
    console.log('Error')
  }
}