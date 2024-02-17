const endDate = "17 february 2024 10:00 PM";

document.getElementById("endDate").innerHTML=endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end =new Date(endDate);
    const now = new Date()
    const diff = (end-now)/1000;
    console.log(diff);
    
    inputs[0].value=Math.floor(diff / 3600 / 24);
    inputs[1].value=Math.floor(diff/3600 % 24);
    inputs[2].value=Math.floor(diff/60 % 60);
    inputs[3].value=Math.floor(diff % 60);
     

    // convert into days
// 1day=24hr   
// 1hr=60mi
//60min=3600s
// 1s=60ms  
}
clock();
setInterval(
    ()=>{
    clock()
},
1000
)