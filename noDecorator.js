// order class. This is the main class that takes 
// a specific order with a price value
class Order {
  constructor() {//name, price) {
  }

  printGreeting() {
    console.log("hello");
  }
}

// the drink class
class Drink extends Order {
  constructor(name, price, tapioca, aloe, reg, choco) {
    super();
    this.name = name;
    this.price = price;

    if (tapioca == true) {
      this.price += 0.5;
      this.name += " with tapioca "
    } 
    if (aloe == true) {
      this.price += 0.5;
      this.name += " with aloe "
    }
    if (reg == true) {
      this.price += 0.5;
      this.name += " with regular whipped cream "
    }
    if (choco == true) {
      this.price += 0.5;
      this.name += " with chocolate whipped cream "
    }
  }

  initialPrint() {
    console.log("Hi, your drink is " + this.name + " is there anything you'd like to add?");
  }

  endPrint() {
    console.log("Hi your order is " + this.name + " for $" + this.price);
  }

}


// function that does some backend stuff about
// making drinks and generating objects
function generateStuff(){
  
  //getting field values
   tapioca = false;
  aloe = false;
  regular = false;
  choco = false;


  // checking if there are toppigns and updating price
  if (document.getElementById("tapiocaSelect").checked == true) {
    console.log("the additional tapioca will be another $0.5");
    tapioca = true;
  }

  if (document.getElementById("aloeSelect").checked == true) {
    console.log("the additional aloe will be another $0.5");
    aloe = true;
  }

  if (document.getElementById("regularSelect").checked == true) {
    console.log("the additional regular cream will be another $0.5");
    regular = true;
  }

  if (document.getElementById("chocolateSelect").checked == true) {
    console.log("the additional chocolate cream will be another $0.5");
    choco = true;
  }


  drink = new Drink(document.getElementById("teaSelect").value, 5, tapioca, aloe, regular, choco);
  drink.initialPrint();

  console.log(drink.price);

  drink.endPrint();
}
