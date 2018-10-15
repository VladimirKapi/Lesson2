//задание1
function explain() {
    var a = 1,
        b = 1,
        c, d;
    c = ++a;
    alert(c); // 2 "++a" увеличит переменную на 1, а затем вернёт ее значение в "с". 
    d = b++;
    alert(d); // 1 "а++" вернет старое значение до увеличения 
    c = (2 + ++a);
    alert(c); // 5 здесь идет уже 2 + 1 +а, а=2 так как в с была префиксная форма а
    d = (2 + b++);
    alert(d); // 4 здесь идет 2+b? b=2 так как в d была Постфиксная форма b
    alert(a); // 3 выводит 3 потому что на "а" дважды была применена префиксная форма
    alert(b); // 3 выводит 3 потому что на "b" дважды применена постфиксная форма 
}

//задание 2
function findValue() {
    var a = 2;
    var x = 1 + (a *= 2); // сначала будет выполнено то что в скобках т. е. а=а*2 или а=2*2 =4 и потом выполнится 1+(а)=1+4 и того х=5
    alert(x);
}

//задание 3
function mathFunction() {
    var a = +prompt('Введите "A"'),
        b = +prompt('Введите "B"');
    if (a > 0 && b > 0) {
        alert(a - b);
    } else if (a < 0 && b < 0) {
        alert(a * b);
    } else if (a < 0 && b > 0 || a > 0 && b < 0) {
        alert(a + b);
    }
}
//задание 4
function conclusion() {
    var a = prompt("Введите число от 1 до 15");
    switch (a) {
        case '1':
            alert('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;

        case '2':
            alert('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;

        case '3':
            alert('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case '4':
            alert('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case '5':
            alert('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case '6':
            alert('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case '7':
            alert('7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case '8':
            alert('8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case '9':
            alert('9, 10, 11, 12, 13, 14, 15');
            break;
        case '10':
            alert('10, 11, 12, 13, 14, 15');
            break;
        case '11':
            alert('11, 12, 13, 14, 15');
            break;
        case '12':
            alert('12, 13, 14, 15');
            break;
        case '13':
            alert('13, 14, 15');
            break;
        case '14':
            alert('14, 15');
            break;
        case '15':
            alert('15');
            break;
        default:
            alert('Неизвестное значение: ' + a)

    }
}
// Задание 5
function calc() {
    var trueAB = true;
    var trueOperand = true;
    var allOperands = ['+', '-', '*', '/'];
 
    var a = +prompt('Введите A:','');
    var b = +prompt('Введите B:','');
 
    abNaN(a, b);
 
    if(trueAB) {
        var operand = prompt('Введите знак арифметической операции (+, -, *, /):','');
        var trueOp = checkOp(operand);
    }
    if(trueAB && trueOperand) {
        alert('Результат: ' + mathAB(a,b,operand));
    }
 
    function abNaN(a,b) {
        if(isNaN(a)) {
            alert('Число A некорректное');
            trueAB = false;
        }  
        if(isNaN(b)) {
            alert('Число B некорректное');
            trueAB = false;
        }
    }
 
    function checkOp(op) {
        
        for(var i = 0; i < allOperands.length; i++) {
            if(op === allOperands[i]) {
                return op;
            } else continue;
        }
        trueOperand = false;
        alert('Знак арифметической операции некорректный');
    }
 
    function mathAB(a, b, op) {
        if(op === '+') {
            return a + b;
        } else if(op === '-') {
            return a - b;
        } else if(op === '*') {
            return a * b;
        } else if(op === '/') {
            if(y == 0) {
                return 'Делить на ноль нельзя!';
            } else {
                return a / b;
            }
        }
    }
}


// Задание 6
function math() {
    let a = +prompt("Введите А"),
        b = +prompt("Введите В"),
        c = prompt("Ведите операцию");
    switch (c) {
        case "+":
            alert(a + b);
            return a + b;            
            break;
        case "-":
            alert(a - b);
            return a - b;
            break;
        case "/":
            alert(a / b);
            return a / b;
            break;
        case "*":
            alert(a * b);
            return a * b;
            break;
        default:
            alert("Повторить");
    }
}


// Задание 7
function comp(){
    console.log(null === 0); // сторогое правило null и гundefined не равны чему либо
    console.log(null == 0);  // сторогое правило null и гundefined не равны чему либо
    
}
 // Задание 8
function power(){
    let x = +prompt("Введите число"), n = +prompt("Введите степень");
    function pow(x, n) {
  if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

alert( pow(x, n) ); 
    
}