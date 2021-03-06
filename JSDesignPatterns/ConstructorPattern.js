/**
 *
 * Constructors with prototypes allow sharing of common member instances among different objects.
 * It's a good Design Pattern to define functions which needs to be shared amoung all objects in the Prototype object, this
 * prevents redefining the function in all separate instances.
 *
 * Created by Prabhash Rathore on 12/9/14.
 */

//constructor
function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName
};

//same function instance will be availed to all instances of Person object using prototype object
Person.prototype.toString = function() {
    return this.firstName + " " + this.lastName;
}

var a = new Person("Max", "Green");
var b = new Person("Messer", "Peterson");

console.log("Person a: " + a.toString());
console.log("Person b: " + b.toString());



