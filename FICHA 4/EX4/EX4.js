let schedule = {};  
alert( isEmpty(schedule) ); // true  
schedule["8:30"] = "get up";  
alert( isEmpty(schedule) ); // false  

function isEmpty(){
    for (const key in schedule) {
            return false
    }
    return true
}