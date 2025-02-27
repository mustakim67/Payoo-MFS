document.getElementById("addMoney-btn").addEventListener('click',function(event){
    event.preventDefault();

    const Amount=document.getElementById("amount").value;
    const converted_amount=parseFloat(Amount);
    
    const main_balance=document.getElementById("mainbalance").innerText;
    const converted_mainBalance=parseFloat(main_balance);

    const pin=document.getElementById('pin').value;
    if(pin==='1345')
    {
       const sum=converted_amount+converted_mainBalance;
       document.getElementById("mainbalance").innerText=sum;
    }
    else{
        alert("Invalid Password");
    }
})