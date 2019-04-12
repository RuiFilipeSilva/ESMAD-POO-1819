//B
let a = document.getElementById("p2");
console.log(a)

//C
let b = document.getElementsByTagName("p")
console.log(b)

//D
let c = document.querySelectorAll("p")
for(let i = 0;i<c.length;i++){
    console.log(c[i].innerHTML)
}

//E
let d = document.getElementsByClassName("red")
console.log(d);

//F
let e = document.querySelector("p#p3")
console.log(e)

//G
let f = document.querySelectorAll("p, div")
for(const elm of f){
    console.log(elm.innerHTML)
}

//H
let g = document.querySelectorAll("span")
for (const elm of g) {
    console.log(elm.innerHTML)
}

//I
let h = document.querySelectorAll("div span")
console.log(h.innerHTML)

//J
let i = document.querySelectorAll("body>div")
console.log(i.innerHTML)