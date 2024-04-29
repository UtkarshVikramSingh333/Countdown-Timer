const endDate="28 May 2024 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")


function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff<0) return;
    //convert into days
    inputs[0].value = Math.floor(diff/3600/24);
    //convert into remaining hours
    inputs[1].value = Math.floor((diff/3600)%24);
    //convert into remaining minutes
    inputs[2].value = Math.floor((diff/60)%60);
    //convert into remaining seconds
    inputs[3].value = Math.floor(diff%60);


}
//initials call
clock()

//set interval
setInterval(
    ()=>{
        clock()
    },1000
)