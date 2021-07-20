//原型链的基础
// function Say() {
//   this.a = 'hello';
// }
// function func() {
//   this.b = '你好';
// }

// func.prototype = new Say();

// var boo = new func();

// // console.log(boo.a);

// //构造函数的继承

// function Say() {
//   this.a = 'hello';
//   this.b = '你好';
// }

// function Func() {
//   Say.apply(this);
//   this.a = '你好';
// }

// var boo = new Func();
// // console.log(boo);

// var boo1 = new Func();
// // console.log(boo1.a);

// var arr = [1, 'a', '1', 2, '2', 'b', 'b'];
// var obj = [];

// for (var i = 0; i < arr.length; ++i) {
//   obj[arr[i]] = '';
// }

// // console.log(Object.keys(obj));

// // var a, b;
// // (function () {
// //   console.log(a);
// //   console.log(b);
// //   b = 3;
// //   var a = b;

// //   console.log(a);
// //   console.log(b);
// // })();
// // console.log(a);
// // console.log(b);

// function fb1(n) {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return fb1(n - 1) + fb1(n - 2);
//   }
// }
// function getFib(num) {
//   var num1 = 1;
//   var num2 = 1;
//   var sum = 0;
//   for (var i = 3; i <= num; i++) {
//     sum = num1 + num2;
//     num1 = num2;
//     num2 = sum;
//     console.log(sum);
//   }
//   return sum;
// }
// console.log(getFib(7));

let str = '{{name}}很厉害，才{{age}}岁';

let obj = { name: '二月', age: 15 };

function test(str, obj) {
  let _s = str.replace(/\{\{(\w+)\}\}/g, '$1');
  console.log(_s);
  let result;

  for (let k in obj) {
    _s = _s.replace(new RegExp(k, 'g'), obj[k]);
  }
  return _s;
}
console.log(test(str, obj));
