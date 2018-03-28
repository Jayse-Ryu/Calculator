// //making factory pattern
// var factory_saying = function() {
//     console.log('Type : ' + (typeof this));
//     console.log('Name : ' + this.name);
//     console.log('Age : ' + this.age);
// };
//
// var factory_partner = function (name, age) {
//     var that = new Object();
//     that.name = name;
//     that.age = age;
//     that.say = factory_saying;
//     return that;
// }
//
// var facrico = factory_partner('Rico', 11);
// var facpaddon = factory_partner('Paddon', 14);
//
// facrico.say();
// facpaddon.say();
//
// console.log('constructor is create_partner? : ' + (facrico.constructor == factory_partner()));
// console.log('instance is create_partner? : ' + (facpaddon instanceof factory_partner));
// console.log('instance is Object? : ' + (facrico instanceof Object)); //true
//
// console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
//
//
// //constructor pattern begin
// var consay = function () {
//     console.log('Name : ' + this.name + ', Age : ' + this.age);
// };
//
// var con_partner = function (name, age) {
//     this.name = name;
//     this.age = age;
//     this.say = consay;
// };
//
// var rico = new con_partner('Rico', 13);
// var paddon = new con_partner('Paddon', 14);
//
// rico.say();
// paddon.say();
//
// console.log('constructor is Partner? : ' + (rico.constructor == con_partner)); //true
// console.log('instance is Object? : ' + (rico instanceof Object)); //true
// console.log('instance is Partner? : ' + (rico instanceof con_partner)); //true
//
// console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
//
//
// //prototype pattern
// var pro_partner = function(name, age) {
//
//
//     this.name = name;
//     this.age = age;
// };
// pro_partner.prototype = {
//     constructor : pro_partner(),
//     say : function() {
//         console.log('Name : ' + this.name + ', Age : ' + this.age);
//     }
// };
//
// var prorico = new pro_partner('Rico', 13);
//
// var propaddon = new pro_partner('paddon', 14);
// prorico.say();
//
// propaddon.say();
// console.log(prorico.say === propaddon.say); // true
//
// console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
// // Module pattern
// var HTMLChanger = (function() {
//     var contents = 'contents';
//
//     var changeHTML = function() {
//         var element = document.getElementById('attribute-to-change');
//         element.innerHTML = contents;
//     };
//
//     return {
//         callChangeHTML: function() {
//             changeHTML();
//             console.log(contents);
//         }
//     };
//
// })();
//
//
// HTMLChanger.callChangeHTML(); //contents
// console.log(HTMLChanger.contents); //undefined
//
//
// console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
//
//
// //Revealing Module pattern
// var Exposer = (function () {
//     var privateVariable = 10;
//
//     var privateMethod = function () {
//         console.log('Inside a private method!');
//         console.log(privateVariable);
//         privateVariable++;
//     };
//
//     var methodToExpose = function() {
//         console.log('This is a method I want to expose!');
//     };
//
//     var otherMethodIWantToExpose = function () {
//         privateMethod();
//     };
//
//     return {
//         first: methodToExpose,
//         second: otherMethodIWantToExpose
//     };
// })();
//
// Exposer.first();
// Exposer.second();
// Exposer.methodToExpose; //undefined
//
//
// console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")


// window.onload = function () {
//     var eqCtl = document.getElementById('eq');
//     var currNumberCtl = document.getElementById('currNumber');
//     calculator.init(eqCtl, currNumberCtl);
// };
//
// var calculator = function() {
//     var eqCtl,
//         currNumberCtl,
//         operator,
//         operatorSet = false,
//         equalsPressed = false,
//         lastNumber = null,
//
//         init = function(equals, currNumber) {
//             eqCtl = equals;
//             currNumberCtl = currNumber;
//         },
//
//         add = function(x, y) {
//             return x + y;
//         },
//
//         subtract = function(x, y) {
//             return x - y;
//         },
//
//         multiply = function(x, y) {
//             return x * y;
//         },
//
//         divide = function(x, y) {
//             if (y == 0) {
//                 alert("Can't divide by 0");
//                 return 0;
//             }
//             return x / y;
//         },
//
//         setVal = function(val) {
//             currNumberCtl.innerHTML = val;
//         },
//
//         setEquation = function(val) {
//             eqCtl.innerHTML = val;
//         },
//
//         clearNumbers = function() {
//             lastNumber = null;
//             equalsPressed = operatorSet = false;
//             setVal('0');
//             setEquation('');
//         },
//
//         setOperator = function(newOperator) {
//             if (newOperator == '=') {
//                 equalsPressed = true;
//                 calculate();
//                 setEquation('');
//                 return;
//             }
//
//             //Handle case where = was pressed
//             //followed by an operator (+, -, *, /)
//             if (!equalsPressed) calculate();
//             equalsPressed = false;
//             operator = newOperator;
//             operatorSet = true;
//             lastNumber = parseFloat(currNumberCtl.innerHTML);
//             var eqText = (eqCtl.innerHTML == '') ?
//                 lastNumber + ' ' + operator + ' ' :
//                 eqCtl.innerHTML + ' ' + operator + ' ';
//             setEquation(eqText);
//         },
//
//         numberClick = function(e) {
//             var button = (e.target) ? e.target : e.srcElement;
//             if (operatorSet == true || currNumberCtl.innerHTML == '0') {
//                 setVal('');
//                 operatorSet = false;
//             }
//             setVal(currNumberCtl.innerHTML + button.innerHTML);
//             setEquation(eqCtl.innerHTML + button.innerHTML);
//         },
//
//         calculate = function() {
//             if (!operator || lastNumber == null) return;
//             var currNumber = parseFloat(currNumberCtl.innerHTML),
//                 newVal = 0;
//             //eval() would've made this a whole lot simpler
//             //but didn't want to use it in favor of a more
//             //"robust" set of methods to demo patterns
//             switch (operator) {
//                 case '+':
//                     newVal = add(lastNumber, currNumber);
//                     break;
//                 case '-':
//                     newVal = subtract(lastNumber, currNumber);
//                     break;
//                 case '*':
//                     newVal = multiply(lastNumber, currNumber);
//                     break;
//                 case '/':
//                     newVal = divide(lastNumber, currNumber);
//                     break;
//             }
//             setVal(newVal);
//             lastNumber = newVal;
//         };
//
//     return {
//         init: init,
//         numberClick: numberClick,
//         setOperator: setOperator,
//         clearNumbers: clearNumbers
//     };
// }();


// Calculation Module

document.onselectstart=function(){return false;} // 드래그 방지
document.ondragstart=function(){return false;} // 선택 방지

var calculation = (function() {

    console.log("Calculation");

    var first = null,
        second = null,
        value = null,
        operator = null,

        num_flag = 0,
        dot_flag = 0,
        oper_flag = 0,

    num_input = function () {
        // Make sure you clicked number button
        num_flag = 0;

        if (second == null) {
            second = this.innerHTML;
            num_flag = 1;
        } else if (second != null){
            second += this.innerHTML;
            num_flag = 1;
        }

        oper_flag = 0;
        console.log("first" + first);
        console.log("second" + second);
        document.getElementById("head_done").innerHTML = second;
        return second;
    },

    put_offer = function() {
        console.log("put_offer!");

        if(oper_flag == 0) {
            work(operator);
            operator = this.innerHTML;
            second = null;
            num_flag = 0;
        } else {
            operator = this.innerHTML;
            second = null;
        }
        if(oper_flag == 2) {
            work(operator);
            num_flag = 0;
        }
        oper_flag = 1;

        console.log("operator is " + operator);
    },

    dot = function () {
        console.log("dot!");

        if (num_flag == 0) {
            second = '0.';
            dot_flag = 1;
        } else if (num_flag == 1 && dot_flag == 0){
            second += '.';
            dot_flag = 1;
        }

        document.getElementById("head_done").innerHTML = second;
        console.log(second);
    },

    clear = function () {
        console.log("clear!");

        first = null;
        second = null;
        value = null;
        operator = null;

        num_flag = 0;
        dot_flag = 0;
        oper_flag = 0;

        document.getElementById("head_run").innerHTML = first;
        document.getElementById("head_done").innerHTML = second;
    },

    equal = function () {
        console.log("result!");
        work(operator);
        document.getElementById("head_run").innerHTML = first;
        document.getElementById("head_done").innerHTML = first;

        num_flag = 0;
        oper_flag = 1;
        dot_flag = 0;
        console.log(first);
        console.log(second);
    },

    work = function(op) {
        switch (op) {
            case '+' :
                first = (first*1 + second*1);
                break;
            case '-' :
                first = (first*1 - second*1);
                break;
            case '*' :
                first = (first*1 * second*1);
                break;
            case '/' :
                if(second != 0) {
                    first = (first*1 / second*1);
                } else {
                    alert("Value can't be 0");
                }
                break;
            case null :
                first = second;
                break;
        }
        document.getElementById("head_run").innerHTML = first;
        num_flag = 0;
        dot_flag = 0;
        oper_flag = 0;
    };

    return {
        num_input: num_input,
        put_offer: put_offer,
        dot: dot,
        clear: clear,
        equal: equal
    };

})();


// Get Calculator Event
var num = document.getElementsByClassName('num');
var operator = document.getElementsByClassName('operator');
var dot = document.getElementsByClassName('dot');
var clear = document.getElementsByClassName('clear');
var result = document.getElementsByClassName('result');

for(var i = 0; i < num.length; i++) {
    num[i].addEventListener("click", calculation.num_input);
}

for(var j = 0; j < operator.length; j++) {
    operator[j].addEventListener("click", calculation.put_offer);
}

for(var k = 0; k < dot.length; k++) {
    dot[k].addEventListener("click", calculation.dot);
}

for(var l = 0; l < clear.length; l++) {
    clear[l].addEventListener("click", calculation.clear);
}

for(var n = 0; n < result.length; n++) {
    result[n].addEventListener("click", calculation.equal);
}
