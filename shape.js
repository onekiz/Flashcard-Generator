
var Shape = function () {

}

Shape.prototype.getType = function() {
     console.log(this.type);
}

Shape.prototype.area = function (){
  if (this.type === "Square"){
      return Math.pow(this.side1, 2);
    }
    else if (this.type==="Triangle"){
      var sum = this.side1 + this.side2 + this.side3;
      var p = sum/2;
      return Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3));
    }
};


var Triangle = function(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.type = "Triangle";
}

var Square = function (side1){
  this.side1 = side1;
  this.type = "Square";
}



//Triangle.prototype = new Shape();
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Square.prototype = new Shape();
//Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

var sq = new Square (4);
var tr = new Triangle(2,2,2);
console.log(tr instanceof Triangle);
console.log(tr.constructor);
tr.getType();














var SuperClass = function(value) {
  this.prop1 = value * 2;
};

SuperClass.prototype.superMethod = function() {
  console.log('This is a super method.');
};

var SubClass = function(value) {
  SuperClass.call(this, value);
  this.prop2 = 100;
};


SubClass.prototype = Object.create(SuperClass.prototype);
SubClass.prototype.constructor = SubClass;

SubClass.prototype.superMethod = function() {
  console.log('This is a super method on sub.');
};

SubClass.prototype.subMethod = function() {
  console.log('This is a sub method.');
};




var superObj = new SuperClass(25);
var subObj = new SubClass(30);

console.log("---------------------------------------------");
console.log(superObj.prop1); // logs 50
superObj.superMethod(); // logs 'This is a super method.'
console.log(subObj.prop1); // logs 60
console.log(subObj.prop2); // logs 100
subObj.superMethod(); // logs 'This is a super method on sub.'
subObj.subMethod(); // logs 'This is a sub method.'
console.log(subObj instanceof SuperClass)
