//Vehicle
class Vehicle {
    constructor(wheeler, type) {
      this._wheeler = wheeler;
      this._type = type;
    }
     get wheeler(){
      return this._wheeler;
    }
    get type(){
      return this._type;
    }
    description(){
      return `I have ${this.wheeler} wheel and I am of the ${this.type} type`
    } 
  }
  