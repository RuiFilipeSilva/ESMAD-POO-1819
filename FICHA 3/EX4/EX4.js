//Aii
btn.onclick=function(){
    alert("Olá Mundo!")
    const myTxt=document.querySelector("#txt")
    document.querySelector("#p1").innerHTML=myTxt.value
}

//Aiii e B
document.getElementById("btn2").addEventListener("click",function(){
    alert("Olá Mundo!")
    const myTxt=document.querySelector("#txt")
    alert(myTxt.nodeValue.length)
})



