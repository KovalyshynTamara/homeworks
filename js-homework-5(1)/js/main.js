/*
1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
    1. Метод, який виводить на екран інформацію про автомобіль
    2. Додавання ім’я водія у список
    3. Перевірка водія на наявність його ім’я у списку
    4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

*/
const car = {
    producer: 'Mazda Motor Corporation',
    model: 'Mazda 3',
    year: 2011,
    averageSpeed: 60,
    volumeoFTank: 55,
    fuelConsumption: 7.2,
    drivers: ['Maria', 'Tamara'],
    info: function(){
        for(let key in car){
            const a = (`${key} = ${car[key]}`)
            rez =+ a
        }
        return rez
    },
    getElement: function(id,key){
        document.getElementById(id).innerHTML = car[key]
    },
    show: function(){
        this.getElement("producer", "producer")
        this.getElement("model", "model")
        this.getElement("year", "year")
        this.getElement("averageSpeed", "averageSpeed")
        this.getElement("volumeoFTank", "volumeoFTank")
        this.getElement("fuelConsumption", "fuelConsumption")
        document.getElementById("drivers").innerHTML = car.drivers
    },
      addDrivers: function(){
          const name = (document.getElementById("name")).value
          if (isNaN(name) && name != '') {
            this.drivers.push(name)
            car.show()  
          } else {
              toast.danger('enter valid driver name')
          }        
    },
    checkDriver: function () {
        const check = (document.getElementById("check")).value
        
        if (this.drivers.includes(check)) {
              toast.success('This driver IS in the list')
        } else {
            toast.danger('This driver IS NOT on the list')
        }
    },
    calc: function(){
        const distance = (document.getElementById("distance")).value
        if(!isNaN(distance)){
            const rez = distance / this.averageSpeed
            for (let i = 0; i <= rez; i++){
                if (i % 4 === 0){
                    i++
                }
                document.getElementById("time").innerHTML = i.toFixed(1)
            }
            const rez2 = distance * (this.fuelConsumption / 100)
            document.getElementById("fuelQuantity").innerHTML = rez2.toFixed(1)
        }
    },
}