
function getNumberById(id) {
    return parseInt(document.getElementById(id).value.trim())
}

function setOutput(id, text) {
   document.getElementById(id).innerHTML = `<span style="font-size:22px; color:hotpink;">${text} </span>`;
} 

//1.2 Створи функцію, яка буде виводити кількість переданих їй аргументів.


function numberOfArguments() {
    let arguments = document.getElementById('arguments').value.trim()
    let isValid = true
    if (arguments === '') {
        alert('Enter arguments')
        isValid = false
    }
    if (isValid) {
        const rez = arguments.split(',').length
        setOutput('rez', `<b>${rez}</b>`)
    }  
}

// 1.3 Напиши функцію, яка приймає 2 числа і повертає :
function compare(a,b) {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1 
    } else {
        return 0
    }
    
}

function compareTwoNumbers() {

    const a = getNumberById('number1')
    const b = getNumberById('number2')

    let isValid = true

    if (isNaN(a)) {
        alert('Enter first number')
        isValid = false
    }
    if (isNaN(b)) {
        alert('Enter second number')
        isValid = false
    }

    if (isValid) {
        const result = compare(a,b)
        setOutput('result', `Result is: <b>${result}</b>`)  
    } else {
        setOutput('Enter valid number')
    }
}

// 1.4 Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}


function getFactorial() {
    const n = getNumberById('numberF')
    let isValid = true 

     if (isNaN(n) || n<0) {
        alert('Enter valid value')
        isValid = false
    }
        if (isValid) {
        const resultF = factorial(n)
        setOutput('resultF', `Factorial of ${n} is: <b>${resultF}</b>`)  
        } else {
            setOutput('Enter valid number')
        }

}


//1.5 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.

function treeNumbers() {

    const num1 = getNumberById('number11')
    const num2 = getNumberById('number22')
    const num3 = getNumberById('number33')
    
    let isValid = true    

     if (isNaN(num1)) {
        alert('Enter valid value')
        isValid = false
    }
     if (isNaN(num2)) {
        alert('Enter valid value')
        isValid = false
    }
     if (isNaN(num3)) {
        alert('Enter valid value')
        isValid = false
    }
    if (isValid) {
    const result1 = joinTogether(num1, num2, num3)
    setOutput('result1', `Result is: <b>${result1}</b>`)   
    } else {
        setOutput('Enter valid number')
    }
}

function joinTogether(num1, num2, num3) {
    let arr = []
    arr.push(num1)
    arr.push(num2)
    arr.push(num3)
    return arr.join('')

}
 
//1.6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function getSquare() {

    const a = getNumberById('height')
    const b = getNumberById('width')

    let isValid = true

    if (isNaN(a)) {
        alert('Enter first number')
        isValid = false
    }
    if (isNaN(b)) {
        alert('Enter second number')
        isValid = false
    }

    if (isValid) {
        const resultS = square(a,b)
        setOutput('resultS', `Result is: <b>${resultS}</b>`)  
    } else {
        setOutput('Enter valid number')
    }
}

function square(a, b) {
    return a * b
}

//2.1 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


function isPerfectNumber() {
    const n = getNumberById('numberP')
    let isValid = true 

     if (isNaN(n)) {
        alert('Enter valid value')
        isValid = false
    }
        if (isValid) {
        const resultP = isPerfect(n)
        setOutput('resultP', `number is: <b>${resultP}</b>`)  
        } else {
            setOutput('Enter valid number')
        }

}

function isPerfect(n) {
    let sum = 0 
    for (let i = 0; i < n; i++){
        if (n % i == 0) {
            sum += i
        }
    }
    return n === sum
        // ? 'perfect' : 'not perfect'; 
}


//2.2 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.



function perfectNumbersBetween() {
    const min = getNumberById('minNumber')
    const max = getNumberById('maxNumber')
    let isValid = true 

     if (isNaN(min)) {
        alert('Enter valid value')
        isValid = false
    }
     if (isNaN(max)) {
        alert('Enter valid value')
        isValid = false
    }
        if (isValid) {
        const perfect1 = diapason(min, max)
        setOutput('perfect1', `perfect numbers in a renge from ${min} to ${max} are: <b>${perfect1}</b>`)  
        } else {
            setOutput('Enter valid number')
        }

}
function diapason(min, max) {
    let rez = []
    for (let i = min; i <= max; i++){
        if (isPerfect(i)) {
            // console.log(i);
            rez.push(i)      
        }  
    }
    return rez
}

