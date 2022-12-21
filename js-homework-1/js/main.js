function sayHello() {

    const userName = prompt('Enter your name');
    if ((userName !== null) && userName !=='') {
        alert(`Hello, ${userName}!`)
    } else {
        alert(`Enter user name`)
    }
    
}

function userAge() {
    const yearOfBirth = parseInt(prompt(`Enter your year of Birth, please`))
    const currentYear = 2022;

    if (!isNaN(yearOfBirth)) {
        const result = currentYear - yearOfBirth;
        alert(`You are ${result} years old. lol`)
    } else {
        alert(`Please, enter integer number`)
    }
}

function perimeterOfSquare() {
    const number = parseInt(prompt(`Enter the length of the side of the square, please`))
    if (!isNaN(number)) {
        const result = number * 4;
        alert(`Perimeter of the squares is equal ${result}`);
    } else {
        alert(`Please, enter integer number`);
    }
}

function circleArea() {
    const radius = parseInt(prompt(`Enter the radius of the circle, please`))
    const pi = 3.14
     if (!isNaN(radius)) {
        const result = radius * radius * pi;
        alert(`Area of a circle is equal ${result}`);
    } else {
        alert(`Please, enter integer number`);
    }
}


function speedKmPerHour() {
    const distance = parseInt(prompt(`Enter distance in km between the cities, please`))
    const hours = parseInt(prompt(`Enter how many hours you want to get there, please`))

     if ((!isNaN(distance)) && (!isNaN(hours))) {

        const result = distance / hours;
        alert(`Speed is ${result} km/h`);
    } else {
        alert(`Please, enter integer number`);
    }
}


function converter() {
    const dollars = parseInt(prompt(`Enter how much money you have in dollars, Lebowski`))
    const k = 0.94

     if (!isNaN(dollars)) {
        const result = (dollars * k).toFixed(2);
        alert(`You have ${result} Euro`);
    } else {
        alert(`Please, enter integer number`);
    }
}

