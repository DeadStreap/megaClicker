window.onload = () => {
const clickCountOut = document.getElementById("clickCountOut")
const clickPowerOut = document.getElementById("clickPowerOut")
const clickBtn = document.getElementById("clickBtn")

if(localStorage.getItem("userClickCount") == null ){
    localStorage.setItem("userClickCount", Number(0))
    var userClickCount = Number(localStorage.getItem("userClickCount"));
}else{
    var userClickCount = Number(localStorage.getItem("userClickCount"));
}
if(localStorage.getItem("userClickPower") == null ){
    localStorage.setItem("userClickPower", Number(1))
    var userClickPower = Number(localStorage.getItem("userClickPower"));
}else{
    var userClickPower = Number(localStorage.getItem("userClickPower"));
}

renderUserClickCount(userClickCount);
renderUserClickPower(userClickPower);

clickBtn.onclick = () =>{
    userClickCount += 1;
    saveClickCount(userClickCount)
    renderUserClickCount(userClickCount);
}


function saveClickCount(userClickCount){
    localStorage.setItem("userClickCount", Number(userClickCount))
}

function renderUserClickCount(userClickCount){
    clickCountOut.innerHTML = userClickCount
}

function renderUserClickPower(userClickPower){
    clickPowerOut.innerHTML = userClickPower
}

}