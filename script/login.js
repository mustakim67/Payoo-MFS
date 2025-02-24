document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account").value;
    const pinNumber =document.getElementById("pin").value;
    const convertedPin=parseInt(pinNumber);
    if (accountNumber.length === 11) {
       if(convertedPin===1345)
       {
        window.location.href="./main.html";
       }
       else{
        alert("Ivalid Password");
       }
    }
    else{
        alert("Ivalid Account Number");
       }
})