 //toogle js  
   document.getElementById("cashOut").style.display="none";
    document.getElementById("add-money").style.display="none";

document.getElementById("addMoney-container").addEventListener('click',function(){
    document.getElementById("cashOut").style.display="none";
    document.getElementById("add-money").style.display="block";

})
document.getElementById("cashOut-container").addEventListener('click',function(){
    document.getElementById("cashOut").style.display="block";
    document.getElementById("add-money").style.display="none";

})

//add money js
document.getElementById("addMoney-btn").addEventListener('click',function(event){
    event.preventDefault();
    
    const Amount=document.getElementById("amount").value;
    const converted_amount=parseFloat(Amount);
    
    const main_balance=document.getElementById("mainbalance").innerText;
    const converted_mainBalance=parseFloat(main_balance);

    const pin=document.getElementById('pin').value;
    const convertedPin=parseInt(pin);
    if(converted_amount>0 && pin)
    {
      if(convertedPin===1345)
    {
       const sum=converted_amount+converted_mainBalance;
       document.getElementById("mainbalance").innerText=sum;
    }
    else{
        alert("Invalid Password");
    }  
    }
    else{
        alert("Enter Amount a valid amount")
    }
})

//Cashout part js
document
  .getElementById("cashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const pin = document.getElementById("cash-pin").value;
    const convertedPin = parseInt(pin);
    
    const amount = document.getElementById("cash-amount").value;
    convertedAmount = parseFloat(amount);

    const mainBalance = document.getElementById("mainbalance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if (convertedPin === 1345) {
      const sum = convertedMainBalance - convertedAmount;
      document.getElementById("mainbalance").innerText = sum;
    } else {
      alert("enter valid pin");
    }
  });

  //leaving page js
  document.getElementById("leave-btn").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="./index.html";
  })