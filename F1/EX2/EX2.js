//a
showMessage("Rui");
function showMessage(name){
    alert(`Olá ${name}`)
}

//b
calcArea(4,5)
function calcArea(a,b){
    let area = a*b
    alert(area)
}

//c
let num1 = +prompt("Número 1")
let num2 = +prompt("Número 2")
let operator = prompt("Escolha o operador:")
calculater(num1,num2,operator)
function calculater(num1,num2,operator){
    let result;
    switch(operator){
        case '+' : alert(`${num1+num2}`)
        break;
        case '-' : alert(`${num1-num2}`)
        break;
        case '*' : alert(`${num1*num2}`)
        break;
        case '/' : 
        if(num2===0){
        alert("Zero não é um número divisivel ")
        }
        else{
        alert(`${num1/num2}`)
        }
        break;
        default:
        alert("Operação Inválida")
    }
}

//d
let peso = prompt("Insira o seu peso em KG")
let altura = prompt("Insira a sua altura em metros:")
calcImc(peso,altura)
function calcImc(peso,altura){
    let imc = peso / (altura*altura)
    if(imc<18.5){
        alert("Abaixo do Peso")
    }
    else if(imc>=18.5 || imc<24.9){
        alert("Peso Normal")
    }
    else if(imc>=24.9 || imc<=29.9){
        alert("Sobrepeso")
    }
    else if(imc>=30 || imc<=34.9){
        alert("Obesidade grau I")
    }
    else if(imc>=35 || imc<39.9){
        alert("Obesidade grau II")
    }
    else{
        alert("Obesidade III ou mórbida")
    }
}

//e
showEco("l",7)
function showEco(s,n){
let result="";
for(let i = 0; i<n; i++){
    result+=s
}
alert(result)
}

//f
showNums(10,20)
function showNums(a,b){
    let result=""
    for(let i = a+1; i<b; i++){
        result += `${i},`
    }
    alert(result)
}

//g
