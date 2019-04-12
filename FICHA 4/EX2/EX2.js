const student = {   
    name: "David Silva",   
    course: "POO",   
    grade: 12   } 

    //B
    function showProprieties(){
    for (const key in student) {
        console.log(key)
        }
    }
    showProprieties();

//C
function removeGrade(){
    for (const key in student) {
        console.log(student[key]) 
    }
    delete student.grade
    for (const key in student) {
        console.log(student[key]) 
    }
}
removeGrade();

//D
function calcObj(){
    let count = 0;
    for (const key in student) {
        count++
    }
    console.log(count)
}