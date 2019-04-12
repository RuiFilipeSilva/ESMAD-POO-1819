import {
    bands, sortBands, 
} from "../models/main.js"

const myCatalog = document.querySelector("#myCatalog")
function renderCatalog(filterName="", filterGenre=""){
    console.log('fn', filterName)
    let result = ""
let i = 0;
for (const band of bands) {
    console.log(band.name)
    console.log(filterName)
    //Apliacr filtros
    if((filterName !== "" && !band.name.startsWith(filterName)) || 
    (filterGenre !== "" && band.genre !== filterGenre)){
        continue
    }
    if(i%3===0){
        result += `<div class="row">`
    }
    result +=
        `
        <div class="col-sm-4">
        <div class="card">
            <img src="${band.photo}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">${band.name}</h5>
               <p class="card-text">${band.genre}</p>
               <a href="#" class="btn btn-success">Ver mais</a>
               <a href="#" class="btn btn-danger">Remover</a>
             </div>
        </div>    
        </div>   
    `
    i++
    if(i%3===0){
        result += `</div>`
    }
}
myCatalog.innerHTML = result
}
renderCatalog()

const filter = document.querySelector("#btnFilter")
const sltGenre = document.querySelector("#sltGenre")
const txtName = document.querySelector("#txtName")
filter.addEventListener("click", function(){
    renderCatalog(txtName.value, sltGenre.value)
})
const btnSort = document.querySelector("#btnSort")
btnSort.addEventListener("click", function(){
    sortBands();
    renderCatalog();
})


