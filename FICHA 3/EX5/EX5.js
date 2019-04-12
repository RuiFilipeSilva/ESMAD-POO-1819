const myForm = document.getElementById("frmGame");


myForm.addEventListener("submit", function(event){
        //Prevenir que o fomrmulario é submetido ao servidor
        event.preventDefault();

        //Obter valores dos dados do form
        const year = document.querySelector("#txtGameYear").value
        const currentYear = new Date().getFullYear()//Obter ano atual

        //Verificar se o ano se encontra entre 1950 e ano atual
        if(year>=1950 && year<= currentYear){
            alert("Validação OK")
            createTableLine();
            frmGame.reset()
        }
        else{
            alert("Erro")
        }
                //Prevenir que o fomrmulario é submetido ao servidor
                event.preventDefault();
})

function createTableLine(){
    const gameName = querySelector("#txtGameName").value;
    const gameYear= querySelector("#txtGameYear").value
    const gameGenre = querySelector("#txtGameGenre").value
    const gameCover = querySelector("#txtGameCover").value

    let table = document.querySelector("table")
table.innerHTML += ` 
<tr>       
<td>${gameName}</td>       
<td>${gameYear}</td>
<td>${gameGenre}</td>
<td><img src="${gameCover}></td>   
</tr>   `
}