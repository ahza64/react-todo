function add (a, b) {
  return a + b;
}
console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var A = ['jen', 'cory'];
var B = ['vik'];
var F = [3, ...A];
// [3, 'jen', 'cory']

console.log(F);

var P = ['andrew', 25];
var P2 = ['jen', 29];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...P); //greet('andrew', 25);
greet(...P2); //greet('jen', 29);

var N = ['mike', 'ben'];
var fin = ['andrew', ...N];

fin.forEach(function (name) {
  console.log('Hi ' + name);
})
