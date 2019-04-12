class Dice {
    constructor(){}

    get faceValue(){
        this._faceValue
    }
    set faceValue(value){
        this._faceValue = value
    }

    get numFaces(){
        this._numFaces
    }
    set numFaces(value){
        this._numFaces = value
    }

    getQuantityFaces(n){
       this._numFaces = n
       return n
    }

    roll(){
        this._faceValue = (Math.floor(Math.random()*this._numFaces) + 1)
        console.log(this._faceValue)
    }
}
const myDice = new Dice();
let num = myDice.getQuantityFaces(5)
const frequencyTable = []

for (let index = 0; index < num; index++) {
    frequencyTable.push(0);
    
}
console.log(frequencyTable)

for (let index = 0; index < 100; index++) {
    myDice.roll()
    const currentValue = myDice._faceValue
    frequencyTable[currentValue-1]+=1
}
console.table(frequencyTable)
//const table = document.querySelector 





