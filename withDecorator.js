// order class. This is the main class that takes 
// a specific order with a price value
class Order {
    constructor() {
    }

    printGreeting() {
      console.log("hello");
    }
  }
 
  // the drink class which we will not touch
class Drink extends Order{
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
  }

  initialPrint() {
    console.log("Hi, your drink is " + this.name + " is there anything you'd like to add?");
  }

  endPrint() {
    console.log("Hi your order is " + this.name + " for $" + this.price);
  }    

}
  
  // decorator class. This manages the combination of
  // inherited classes
  class DrinkDecorator extends Order{
    constructor(drink) {
      super();
      this.drink = drink;
    }

    getPrice() {
      return this.price;
    }

    updateTotal(add) {
      this.drink.price += 0.5;
      this.drink.name = this.drink.name + " with " + add;
    }

    getTotal() {
      return this.drink.price;
    }
  
  }
  
  // the topping of the drink. This is an accessory that is not required
  // examples: tapioca, aloe
  class ToppingDecorator extends DrinkDecorator{
    constructor (drink, topping) {
      super(drink);
      this.topping = topping;
     
      this.printUpdateTopping();
    }

    printUpdateTopping() {
      this.updateTotal(this.topping);
      console.log("adding " + this.topping + " will be another 0.5");
    }
  }

  class whipCreamDecorator extends DrinkDecorator{
    constructor (drink, taste) { 
      super(drink);
      this.taste = taste;

      this.printUpdateCream();
    }

    printUpdateCream() {
      this.updateTotal(this.taste + " whip cream");
      console.log("adding " + this.taste + " cream will be another 0.5");
    }
  }
  
  // function that does some backend stuff about
  // making drinks and generating objects
  function generateStuff() {
    //getting field values
  
    // creating the drink
    drink = new Drink(document.getElementById("teaSelect").value, 5);
    drink.initialPrint();

    // checking if there are toppigns and updating price and names
    if (document.getElementById("tapiocaSelect").checked == true) {
      toppingTapioca = new ToppingDecorator(drink, "tapioca");
    }

    if (document.getElementById("aloeSelect").checked == true) {
      toppingAloe = new ToppingDecorator(drink, "aloe");
    }

    if (document.getElementById("regularSelect").checked == true) {
      creamRegular = new whipCreamDecorator(drink, "regular");
    }

    if (document.getElementById("chocolateSelect").checked == true) {
      creamChoco = new whipCreamDecorator(drink, "chocolate");
    }

    console.log(drink.price);

    drink.endPrint();
  }
  