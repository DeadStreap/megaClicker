window.onload = () => {
const clickCountOut = document.getElementById("clickCountOut")
const clickPowerOut = document.getElementById("clickPowerOut")
const neededPointsOut = document.getElementById("neededPointsOut")
const neededPointsBtn = document.getElementById("neededPointsBtn")
const clickBtn = document.getElementById("clickBtn")


if(localStorage.getItem("userInfo") == null ){
    const user = {
        userClickCount: 0, 
        userClickPower: 1,
        userNeededPoints: 1000
      };
    localStorage.setItem("userInfo", JSON.stringify(user))
    var userInfo = JSON.parse(localStorage.getItem("userInfo"))
}else{
    var userInfo = JSON.parse(localStorage.getItem("userInfo"))
}   
renderUserInfo(userInfo);

clickBtn.onclick = () =>{
    userInfo.userClickCount += userInfo.userClickPower;
    saveUserInfo(userInfo)
    renderUserInfo(userInfo);
}

neededPointsBtn.onclick = () =>{
    checkNeededCount();
}


function saveUserInfo(userInfo){
    const user = {
        userClickCount: userInfo.userClickCount, 
        userClickPower: userInfo.userClickPower,
        userNeededPoints: userInfo.userNeededPoints
    };
    localStorage.setItem("userInfo", JSON.stringify(user))
    renderUserInfo(userInfo)
}

function renderUserInfo(userInfo){
    clickCountOut.innerHTML = userInfo.userClickCount
    clickPowerOut.innerHTML = userInfo.userClickPower
    neededPointsOut.innerHTML = userInfo.userNeededPoints
}
function checkNeededCount(){
    if(userInfo.userClickCount >= userInfo.userNeededPoints){
        userInfo.userClickCount = userInfo.userClickCount -= userInfo.userNeededPoints;
        userInfo.userClickPower += 1;
        userInfo.userNeededPoints *= 2;
        saveUserInfo(userInfo)
    }
}

}