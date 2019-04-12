import Band from "./band.js"
import User from "./user.js"
export let bands = []
//Array de bandas
if(localStorage.bands){
    bands = JSON.parse(localStorage.bands)
}
else{
const band1 = new Band("Muse", "Pop-Rock","https://ichef.bbci.co.uk/images/ic/960x540/p0536400.jpg","xxx","xxx")
const band2 = new Band("RadioHead", "Pop-Rock","https://stevehanfley.com/wp-content/uploads/2018/11/Radiohead.jpg","xxx","xxx")
const band3 = new Band("Metallica", "Metal","https://townsquare.media/site/366/files/2018/10/metallica_by_Ross_Halfin.jpg?w=600&h=0&zc=1&s=0&a=t&q=89","xxx","xxx")
const band4 = new Band("James", "Pop-Rock","https://cdn.newsapi.com.au/image/v1/31ec672391a6a5de14e2fa2075c87f16","xxx","xxx")
bands.push(band1,band2,band3,band4)
localStorage.setItem("bands", JSON.stringify(bands))
}

export let users = []

if(localStorage.users){
    users = JSON.parse(localStorage.users)

}
else{
const user1 = new User("ricardo","12345")
const user2 = new User("maria","54321")
const user3 = new User("pedro","15243")
users.push(user1,user2,user3)
localStorage.setItem("users", JSON.stringify(users))
}

export function sortBands(){
    bands.sort(Band.compare)
    localStorage.setItem("bands", JSON.stringify(bands));
}

