document.getElementById("cashout-btn").addEventListener('click' , function(event){
        event.preventDefault();
        const Pin = document.getElementById("cashout-pin").value;
        const convertedPin = parseFloat(Pin);
        const cashoutAmount = document.getElementById("cashout-amount").value;
        
        convertedCashout = parseFloat(cashoutAmount);
        const mainBalance =  document.getElementById("main-balance").innerText;
        const convertedMainbalance = parseFloat(mainBalance);

        if(convertedPin === 1234){
                const sum = convertedMainbalance - convertedCashout;
                document.getElementById("main-balance").innerText = sum;
        }
        else{
         alert("enter a valid pin")
        }
})