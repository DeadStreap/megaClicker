window.onload = () => {
const clickCountOut = document.getElementById("clickCountOut")
const clickBtn = document.getElementById("clickBtn")

if(localStorage.getItem("userClickCount") == null ){
    localStorage.setItem("userClickCount", Number(0))
    var userClickCount = Number(localStorage.getItem("userClickCount"));
}else{
    var userClickCount = Number(localStorage.getItem("userClickCount"));
}
renderUserClickCount(userClickCount);

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

}