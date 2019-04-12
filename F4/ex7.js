const movies = [];
const txtYear = document.querySelector("#txtMovieName")
const myForm = document.querySelector("form")
myForm.addEventListener("submit", function(event){
    //Prevenir que o fomrmulario é submetido ao servidor
    event.preventDefault();
    //1. Obter os valores de todos os elementos do formulario
    const txtTitle = document.querySelector("#titulo").value
    const txtGenre = document.querySelector("#genero").value
    const txtYear = document.querySelector("#year").value
    const txtCover = document.querySelector("#capa").value
    const txtTrailer = document.querySelector("#trailer").value

    //2. Verificar se o filme já existe
    const result = isMovie(txtTitle)

    if(result === true){
        alert("Filme já existe")
    }
    else{
        //3.Criar objetos
        const newMovie={
            title:txtTitle,
            genre:txtGenre,
            year:txtYear,
            cover:txtCover,
            trailer:txtYear
        }
        //4. Guardar o objeto no array
        movies.push(newMovie)

    }
    //5. Exibir os filme na tabela
    renderTable()


   

})

const btnCloseCover = document.querySelector("#btnCloseCover")
btnCloseCover.addEventListener("click", function(){
    const dlgCover = document.querySelector("#dlgCover")
    dlgCover.Close();

})
//função que vai verificar se o filme existe
function isMovie(txtTiltle){
    for (const movie of movies) {
        if (movie.title === txtTitle) {
            return true;
        }
    }
    return false
}

//Funçao responsavel por exibir todos os filmes do array na tabela HTML
function renderTable(){
    const myTable = document.querySelector("table")

    //Injetar o cabeçalho na tabela
    myTable.innerHTML = `
    <tr>
        <th>TITULO</th>
        <th>GENERO</th>
        <th>OPÇÕES</th>
    <tr>
    `
    //Exibir todos os filmes em linhas independentes
    for (const movie of movies) {
        myTable.innerHTML = `
        <tr>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>
            <button onclick="showCover('${movie.cover}')">VER CAPA</button>
            <button onclick="showTrailer('${movie.trailer}')">VER TRAILER</button>
            <button onclick="removeMovie('${movie.title}')>REMOVER FILME</button>
            </td>
        <tr>
        `
        
    }
}

//Função para exibir uma janela com a capa do filme
function showCover(cover){
    //Injetar o link da capa na img
    const imgCover= document.querySelector("#imgCover")
    imgCover.src = cover

    //exibir janela
    const dlgCover = document.querySelector("#dlgCover")
    dlgCover.showModal()

}

//Função vai remover o filme dando o título
function removeMovie(title){
    for (let i=0; i<movies.length;i++) {
        if(movies[i].title === title){
            //Remover o filme
            movies.splice(i,1)
        }
        
    }
    renderTable();
}

