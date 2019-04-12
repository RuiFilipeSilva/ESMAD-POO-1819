//B
const table = document.createElement("table")
const tr1 =  document.createElement("tr")
const th1 =  document.createElement("th")
const th2 = document.createElement("th")
const tx1 = document.createTextNode("escola")
const tx2 = document.createTextNode("local")

th1.appendChild(tx1);
th2.appendChild(tx2);
tr1.appendChild(th1)
tr1.appendChild(th2)

const tr2 =  document.createElement("tr")
const td1 =  document.createElement("td")
const td2 = document.createElement("td")
const tx3 = document.createTextNode("ESMAD")
const tx4 = document.createTextNode("Vila do Conde")

td1.appendChild(tx3);
td2.appendChild(tx4);
tr2.appendChild(td1)
tr2.appendChild(td2)

table.appendChild(tr1)
table.appendChild(tr2)

document.body.appendChild(table)

//C
document.body.innerHTML += `
        <table>    
            <tr>       
                <th>escola</th>       
                <th>local</th>    
            </tr>    
            <tr>       
                <td>ESMAD</td>       
                <td>Vila do Conde</td>    
            </tr>  
        </table> `

//D
let c = document.querySelector("table")
c.innerHTML += ` 
<tr>       
<td>ISEP</td>       
<td>Porto</td>    
</tr>   `

//E
let d = document.querySelector("td:last-of-type")
d.innerHTML="Vila do Conde/Póvoa de Varzim"

//F
let e = document.querySelector("tbody")
let f = document.querySelector("tr")
e.removeChild(f)