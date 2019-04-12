class Car {
    constructor(brand, plate, color, deposit, fuelType){
        this.brand = brand
        this.plate =  plate
        this.color = color
        this.deposit = deposit
        this.fuelType = fuelType
    }

    changeColor(color){
        this.color = color;
    }

    fullDeposit(liter){
        this.deposit += liter
    }

    kmTraveled(km){
        let spent = (km*5)/100
        if(spent>this.deposit){
            console.log("Não consegue realizar esta viagem")
        }
        else{
            this.deposit = this.deposit - spent
            console.log("Boa Viagem!!")
        }
    }

}

const Ford = new Car("Ford","91-GH-15","verde",40,"Gasóleo")
const Opel = new Car("Opel","23-AB-23","branco",50,"Gasolina")
const Nissan = new Car("Nissan","12-CX-45","preto",22,"Gasóleo")

Ford.fullDeposit(30)
Ford.kmTraveled(50)

console.table(Ford)
console.table(Opel)
console.table(Nissan)

const cars = []

cars.push(Ford);
cars.push(Opel);
cars.push(Nissan);

function brands(marca){
    let result = 0
    for (const car of cars) {
        if(car.brand === marca){
            result += 1
        }
    }
    console.log(`Existe ${result} carro/s da marca ${marca}`)
}

function fuel(type){
    let liters = 0;
    for (const car of cars) {
        if(car.fuelType === type){
            liters += car.deposit
        }    
    }
    console.log(liters)
}

fuel("Gasóleo")
brands("Ford")