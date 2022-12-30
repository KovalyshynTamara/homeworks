
//1.1 Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

function personAge() {
    const age = parseInt(prompt(`Tell me your age`))
    if (age > 0 && age < 12) {
       alert(`smoll baby`)
    } else if(age >= 12 && age < 18){
       alert(`teen kid`)
    } else if(age >= 18 && age < 60){
       alert(`adult`)
    } else if(age >= 60 && age < 120){
       alert(`retired`)
    }else {
       alert(`invalid age`) 
    }
}

//1.2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

function specialSymbol() {
    const number = parseInt(prompt(`Enter number from 0 to 9`))
    switch (number) {
    case 0:
        alert(')')
        break
    case 1:
        alert('!')
        break
    case 'status ':
        alert('@')
        break
    case 3:
        alert('#')
        break
    case 4:
        alert('$')
        break
    case 5:
        alert('%')
        break
    case 6:
        alert('^')
        break
    case 7:
        alert('&')
        break
    case 8:
        alert('*')
        break
    case 9:
        alert('(')
        break
    default:
        alert('Enter number from 0 to 9')
        break
    }
}

// 1.3 Підрахуй суму всіх чисел в заданому користувачем діапазоні

function rangeSum() {
    const min = parseInt(prompt(`Enter first number`))
    const max = parseInt(prompt(`Enter second number`))
    let sum = 0;

    if ((!isNaN(min)) && (!isNaN(max))) {
        if (min !== max) {
           const forMin = min < max ? min : max;
            const forMax = max > min ? max : min;
            for (let i = forMin; i <= forMax; i++) {
                sum += i
            } 
        } 
     alert(`${sum}`)
    } else {
        alert(`Вкажіть, будь ласка ціле число`)
    }
}

// 1.4 Запитай у користувача число і виведи всі дільники цього числа.

function findNSD() {
    const num1 = parseInt(prompt('enter first number'))
    const num2 = parseInt(prompt('enter second number'))
    let nsd = 0;
    if ((!isNaN(from)) && (!isNaN(to))) { 
        const forEnd = num1 < num2 ? num1 : num2;
        for (let i = 1; i <= forEnd; i++){
            if (num1 % i===0 && num2 % i===0) {
                nsd = i;
            }     
        }
        alert(`NSD is: ${nsd}`)        
    } else {
        alert(`enter valid value`)
    }
}
// 1.5 Запитай у користувача число і виведи всі дільники цього числа.

function findAllDividers(){
    const num = parseInt(prompt(`enter number`));
    let rez = '';
    if (!isNaN(num)) {
        for(let i = 1; i <= num/2; i++){
            if(num % i=== 0){
                rez += i+', ';
            }
        }
        rez += num;
        alert(`number ${num} dividers: ${rez}`)
    } else {
        alert(`enter valid number`)
    }
    // return undefined
}

// 2.1 Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


function palindrom() {
    const number = parseInt(prompt(`Вкажіть п'ятизначне число`))

    if (!isNaN(number)) {
        const num1 = Math.trunc(number / 10000)
        const num2 = Math.trunc((number % 10000) / 1000)
        const num4 = Math.trunc((number % 100) / 10)
        const num5 = Math.trunc(number % 10)

        if ((num1 === num5) && (num2 === num4)) {
            alert(`is palindrom`)
        } else {
            alert(`is not palindrom`)
        }
        
    } else {
        alert(`Вкажіть, будь ласка ціле число`)
    }
}

// 2.2 Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

function purchaseDiscount() {
    const sum = parseInt(prompt(`Вкажіть суму покупки`))
    if (sum >= 200 && sum < 300) {
       alert(`${(sum * 0.03)+sum}грн`)
    } else if(sum >= 300 && sum < 500){
       alert(`${(sum * 0.05)+sum}грн`)
    } else if(sum >= 500){
       alert(`${(sum * 0.07)+sum}грн`)
    } else if(sum < 200){
       alert(`${sum}грн`)
    }else {
       alert(`Вкажіть ціле число`) 
    }
}


// 3.2 Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


    for (let i = 1; i <= 9; i++){
    for (let j = 1; j <= 10; j++){
        console.log(i, j, i*j);
        }
    }

