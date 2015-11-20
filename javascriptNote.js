//Create a function min(a,b) which takes two numbers and returns the lesser one.

function min(a,b){
    if(a < b) {
        return a;
    } else {
        return b;
    }
}

// or  the solution with ternary operator

function min(a,b){
    // if cundition is true return hi else hello
    return a < b ? "hi" : "hello";
}

// write a function that take two paramete a and b and return a^b

var c = Math.pow(2,3) // ........> 8

// implicit binding 

var userName = {
    name:"swapnil",
    age:25,
    printName:function(){  // print name is a method wich apply on a object
        console.log(this.name);
    }
}; 

userName.printName();// console: swapnil

// 

var printUserNameMix = function(obj){
    obj.printN = function(){
        console.log(this.name);
    };
};

var user = {
    name: "swapnil",
    age:25
};

var user1 = {
    name: "katiyar",
    age:22
};

printUserNameMix(user);
printUserNameMix(user1);


user.printN();
user1.printN();
// swapnil
// katiyar

var person = function(name,age){
    return {
       name: name,
       age:age,
       sayName:function(){
           console.log(this.name);
       },
       
       muName: {
           name:"katiyar",
           age:23,
           sayName:function(){
               console.log(this.name)
           }
       }
    };
    
   
};

var jim = person("swapnil",23); 

jim.sayName(); //-------> swapnil
jim.muName.sayName(); //------------->katiyar





















