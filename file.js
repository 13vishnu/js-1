/* Arithmatic op*/
let a=40;
let b=20;
let r1=a+b;
let r2=a-b;
let r3=a*b;
let r4=a/b;
let r5=a%b;
console.log("Arithmetic operators:");
console.log(r1,r2,r3,r4,r5)
 
/* Relational op */
var a1=40;
var a2=60;
console.log("Relational operators:");
console.log("Greater :",a>b);
console.log(" lesser:",a<b);
console.log("Greater than equal",a>=b);
console.log("less than equal",a<=b);

/* Logical op */
const x = true;
const y = false;
const z = 4;
console.log("Logical op:");
console.log(x && x);
console.log( x && y);
console.log( x || x);
console.log(x || y);
console.log(!x);
console.log(!y); 

/* Assignment op */
let c=10;
total=20;
console.log("Assignment op:");
console.log(" value of total ="+(total+=c));
console.log("value of totoal ="+(total-=c));
console.log("value of total ="+(total*=c));
console.log("value of total ="+(total/=c));
console.log("value of total="+(total%=c));

/* increment and decrement */
let c1=2;
let c2=4;
console.log("Increment and Decrement op:");
console.log("increment value",+c1++);
console.log(c1);
console.log("Decrement value",+c2--);
console.log(c2);

/* Conditional operators */
let d1=12;
let d2=13;

b1=d1&d2;
b2=d1|d2;
b3=d1^d2;
b4=~d2;
b5=d1<<d2;
b6=d1>>d2;

console.log("Conditional operators:");
console.log(" d1>d2?d1 is greater ':d2 is greater :",d1>d2?"d1 is greater ":"d2 is greater");
console.log("Bitwise operators :");
console.log(b1,b2,b3,b4,b5,b6);
console.log("type of d1 :",typeof(d1))