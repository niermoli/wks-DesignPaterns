class BeverageForPizza {
    constructor(beverageList) {
        this.beverageList = beverageList;
        this.pointer = 0;
    }
    next() {
        return this.beverageList[this.pointer++];
    }
 }
 
 var withPepperoni = new BeverageForPizza(["Coca-Cola", "Water", "Beer"]);
 withPepperoni.next(); //Coca-Cola
 withPepperoni.next(); //Water
 withPepperoni.next(); //Beer
 