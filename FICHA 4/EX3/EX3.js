//A
const grades = [{        
        name: 'Rui',        
        grade: 8    
    },    
    { 
    name: 'Ana',        
    grade: 12    
    },    
    {        
    name: 'Carla',        
    grade: 14    
}] 

//B
function createObj(){
    let name = prompt("Insira nome do aluno:")
    let grade = +prompt("Insiria a nota:")
    //Criar objeto
    const newObj = {
        name: name,
        grade: grade
    }
    //Adicionar ao objeto existente
    grades[grades.length]=newObj;
}
createObj();

//C
function average(){
    let total = 0;
    for (const grade of grades) {
        total += grade.grade
    }
    let media = total/grades.length
    console.log(media) 
}
average();

//D
function positiveGrades(){
    let positive="";
    for (const grade of grades) {
        if(grade.grade>=10){
            positive += `${grade.name} \n`
        }     
    }
    console.log(positive)
}
positiveGrades()
