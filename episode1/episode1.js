const person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log("Hello, my name is " + this.name.toUpperCase());
  }
};

person.sayHello();
const anotherSayHello = person.sayHello.bind(person);
anotherSayHello();