
// 1.1 Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let q = 0.1
let y = 0.2
result1 = (q + y).toFixed(1)

// 1.2 Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let a = '1'
let b = 2
result = parseInt(a) + 2

console.log(result);

// 1.3 Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
function filesQuantity() {
    const gb = parseInt(prompt(`Вкажіть обсяг флешки`))
    if (!isNaN(gb)) {
        const result = Math.floor(gb * 1024 / 820)
        alert(`${result} файлів поміститься на флешці на ${gb}ГБ`   )
    } else {
        alert(`Вкажіть, будь ласка ціле число`)
    }
}

// 2.1 Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
function chocolateQuantity() {
    const money = parseInt(prompt(`Вкажіть суму грошей в гаманці`))
    const price = parseInt(prompt(`Вкажіть ціну однієї шоколадки`))

    if ((!isNaN(money)) && (!isNaN(price)) ){
        const result = Math.floor(money / price)
        alert(` Ви можете придбати ${result} шоколадок за ${money}грн`   )
    } else {
        alert(`Вкажіть, будь ласка ціле число`)
    }
}

// 2.2 Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
function reverseNumber() {
    const number = parseInt(prompt(`Вкажіть тризначне число`))

    if (!isNaN(number)) {
        const first = Math.trunc(number / 100)
        const second = Math.trunc((number % 100) / 10)
        const last = Math.trunc(number % 10)

        const result = last * 100 + second * 10 + first 
        alert(`${result}`)
    } else {
        alert(`Вкажіть, будь ласка ціле число`)
    }
}
// 3.1 Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
function amoundOfMoney() {
    const sum = parseInt(prompt(`Вкажіть суму вкладу в банк`))
    if (!isNaN(sum)) {
        const result = (sum * 0.05 / 6).toFixed(2)
        alert(`Сума нарахованих відсотків становить: ${result}грн`   )
    } else {
        alert(`Вкажіть, будь ласка ціле число`)
    }
}

