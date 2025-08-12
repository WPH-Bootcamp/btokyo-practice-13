// Method / Behavior / Function Global
Function.prototype.sayHello = function() {
  console.log("Hello!");
};
Function.prototype.sayHello = undefined;
function test() {}
function test2() {}
test.sayHello();
test2.sayHello();
