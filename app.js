let intialPrice = document.querySelector("#intial-price")
let currentPrice = document.querySelector("#current-price")
let stocksQuantity = document.querySelector("#quantity-of-stocks")
const outputMessage = document.querySelector("#output-message")
let checkButton = document.querySelector("#check-button")
const changeBackground = document.querySelector("#backgroundcolor-change")
const stockGif = document.querySelector("#stocks-gif")

checkButton.addEventListener("click", checkProfitLoss);
function checkProfitLoss(){
    outputMessage.style.display = "none";
    var ip = intialPrice.value;
    let cp = currentPrice.value; 
    let qt = stocksQuantity.value;

    calculateProfitLoss(ip,qt,cp);

}

function calculateProfitLoss(intial,quantity,current){
    let flage = false;
    if(intial > current){
        let loss = (intial - current) * quantity;
        let lossPercentage = (loss / intial) * 100;
        flage = true;
        showMessage(`Hey, the loss is ${loss} and the percent is ${lossPercentage}%`)
        changeBackgroundColor(flage); 

    }
    else if( current > intial){
        let profit =  (current - intial) * quantity;
        let profitPercentage = (profit / current) * 100;
        //let flage = false;
        changeBackgroundColor(flage);
        showMessage(`Hey, the profit is ${profit} and the percent is ${profitPercentage}%`)
    }

    else{
        showMessage("No loss no gain")
    }
             
}

function showMessage(msg){
  outputMessage.style.display = "block";
  
  outputMessage.innerText = msg;
  
}

function changeBackgroundColor(flage){
    if(flage == true)
    changeBackground.style.backgroundColor = "red";
    else
    changeBackground.style.backgroundColor = "#BEF264";

  console.log("check")
}

