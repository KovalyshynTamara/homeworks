class Circle {
    constructor(radius) {
        this._radius = radius
    }
    get radius() {
        return this._radius
    }
    get diameter() {
        return this._radius * 2
    }
    set radius(newRadius) {
        this.radius = newRadius
    }
    calcArea() {
        return (Math.PI * this.radius ** 2).toFixed(2)
    }
    calcLenght() {
        return (2 * Math.PI * this.radius).toFixed(2)
    }
}

const circle1 = new Circle(12)
console.log(circle1.calcArea());
console.log(circle1.diameter);
console.log(circle1.radius);
console.log(circle1.calcLenght());


class Marker {
    constructor(color, ink=100) {
        this.color = color
        this.ink = ink
    }
    enter(text) {
        let without_spaces = text.split(' ').join('').lenght
        let textQty = this.ink * 2;
        if (without_spaces <= textQty) {
            document.getElementById('output-marker').innerHTML = `${text}`
            document.getElementById('output-marker').style.color=`${this.color}`
        } else {
            let arrText = [...text]
            let res = `<p><span style="color:${this.color}">`
            for (let i = 0; i < arrText.length; i++){
                if (this.ink === 0) {
                    res+=`</span>`
                }
                res += arrText[i]
                if (arrText[i] !== ' ') {
                    this.ink = this.ink - 0.5
                }
            }
            res += `</p>`
            document.getElementById('output-marker').innerHTML = res
            console.log(arrText);
        }
    }
}
