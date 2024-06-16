window.onload = () => {
const clickCountOut = document.getElementById("clickCountOut")
const clickPowerOut = document.getElementById("clickPowerOut")
const afkPowerOut = document.getElementById("afkPowerOut")

const neededClickPowerPointsOut = document.getElementById("neededClickPowerPointsOut")
const neededAfkPowerPointsOut = document.getElementById("neededAfkPowerPointsOut")

const clickPowerUpgradeBtn = document.getElementById("clickPowerUpgradeBtn")
const afkPowerUpgradeBtn = document.getElementById("afkPowerUpgradeBtn")
const clickBtn = document.getElementById("clickBtn")


if(localStorage.getItem("userInfo") == null ){
    const user = {
        ClickCount: 0, 
        ClickPower: 1,
        ClickUpgradeNeededPoints: 1000,
        AfkUpgradeNeededPoints: 1000,
        AfkPower: 0,
      };
    localStorage.setItem("userInfo", JSON.stringify(user))
    var userInfo = JSON.parse(localStorage.getItem("userInfo"))
}else{
    const user = {
        ClickCount: 0, 
        ClickPower: 1,
        ClickUpgradeNeededPoints: 1000,
        AfkUpgradeNeededPoints: 1000,
        AfkPower: 0,
      };
    localStorage.setItem("userInfo", JSON.stringify(user))
    var userInfo = JSON.parse(localStorage.getItem("userInfo"))
}   
renderUserInfo(userInfo);

clickBtn.onclick = () =>{
    userInfo.ClickCount += userInfo.ClickPower;
    saveUserInfo(userInfo)
}

clickPowerUpgradeBtn.onclick = () =>{
    checkClickNeededCount();
}

afkPowerUpgradeBtn.onclick = () =>{
    checkAfkNeededCount();
}

function generateScorePerSecond(value) {
    setInterval(() => {
    userInfo.ClickCount += value;
    saveUserInfo(userInfo)
    }, 1000); 
  }

generateScorePerSecond(userInfo.AfkPower)

function saveUserInfo(userInfo){
    const user = {
        ClickCount: userInfo.ClickCount, 
        ClickPower: userInfo.ClickPower,
        ClickUpgradeNeededPoints: userInfo.ClickUpgradeNeededPoints,
        AfkUpgradeNeededPoints: userInfo.AfkUpgradeNeededPoints,
        AfkPower: userInfo.AfkPower
    };
    localStorage.setItem("userInfo", JSON.stringify(user))
    renderUserInfo(userInfo)
}

function renderUserInfo(userInfo){
    clickCountOut.innerHTML = userInfo.ClickCount
    clickPowerOut.innerHTML = userInfo.ClickPower
    afkPowerOut.innerHTML = userInfo.AfkPower
    neededClickPowerPointsOut.innerHTML = userInfo.ClickUpgradeNeededPoints
    neededAfkPowerPointsOut.innerHTML = userInfo.AfkUpgradeNeededPoints
}

function checkClickNeededCount(){
    if(userInfo.ClickCount >= userInfo.ClickUpgradeNeededPoints){
        userInfo.ClickCount = userInfo.ClickCount -= userInfo.ClickUpgradeNeededPoints;
        userInfo.ClickPower += 1;
        userInfo.ClickUpgradeNeededPoints *= 2;
        saveUserInfo(userInfo)
    }
}

function checkAfkNeededCount(){
    if(userInfo.ClickCount >= userInfo.AfkUpgradeNeededPoints){
        userInfo.ClickCount = userInfo.ClickCount -= userInfo.AfkUpgradeNeededPoints;
        userInfo.AfkPower += 1;
        userInfo.AfkUpgradeNeededPoints *= 3;
        saveUserInfo(userInfo)
        generateScorePerSecond(userInfo.AfkPower);
    }
}

}