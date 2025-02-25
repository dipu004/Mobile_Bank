document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
     console.log(amount);
     const convertedAmount = parseFloat(amount);
     const Pin = document.getElementById("PIN").value;
     const convertedPin = parseInt(Pin);
     const mainBalance = document.getElementById("main-balance").innerText;
     const contertedMainbalance = parseFloat(mainBalance);
     if(convertedPin === 1234){
        const sum = contertedMainbalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
     }
     else{
        alert("pin sothik na");
     }
}) 