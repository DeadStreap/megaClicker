window.onload = () => {
const clickCountOut = document.getElementById("clickCountOut")
const clickPowerOut = document.getElementById("clickPowerOut")
const neededPointsOut = document.getElementById("neededPointsOut")
const clickBtn = document.getElementById("clickBtn")


if(localStorage.getItem("userInfo") == null ){
    const user = {
        userClickCount: 0, 
        userClickPower: 1,
        userNeededPoints: 1000
      };
    localStorage.setItem("userInfo", JSON.stringify(user))
    var userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userInfo)
}else{
    var userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userInfo.userClickCount)
}   
renderUserInfo(userInfo);

clickBtn.onclick = () =>{
    userInfo.userClickCount += userInfo.userClickPower;
    saveUserInfo(userInfo)
    renderUserInfo(userInfo);
}


function saveUserInfo(userInfo){
    const user = {
        userClickCount: userInfo.userClickCount, 
        userClickPower: userInfo.userClickPower,
        userNeededPoints: userInfo.userNeededPoints
    };
    localStorage.setItem("userInfo", JSON.stringify(user))
    renderUserInfo(user)
}

function renderUserInfo(userInfo){
    clickCountOut.innerHTML = userInfo.userClickCount
    clickPowerOut.innerHTML = userInfo.userClickPower
    neededPointsOut.innerHTML = userInfo.userNeededPoints
}

if(userInfo.userNeededPoints <= userInfo.userClickCount){
    const user = {
        userClickCount: 0, 
        userClickPower: userInfo.userClickPower += 1,
        userNeededPoints: userInfo.userNeededPoints *= 2
      };
    saveUserInfo(user)
}

}