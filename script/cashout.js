document.getElementById("cashout-btn").addEventListener('click' , function(event){
        event.preventDefault();
        const Pin = document.getElementById("cashout-pin").value;
        const convertedPin = parseFloat(Pin);
        const cashoutAmount = document.getElementById("cashout-amount").value;
        
        convertedCashout = parseFloat(cashoutAmount);
        const mainBalance =  document.getElementById("main-balance").innerText;
        const convertedMainbalance = parseFloat(mainBalance);
        const selectBank = document.getElementById("allbank").value;
        console.log(selectBank);
             if(convertedCashout > convertedMainbalance){
                alert("Invalid Amount")
                return;
             }
        if(convertedPin === 1234){
                const sum = convertedMainbalance - convertedCashout;
                document.getElementById("main-balance").innerText = sum;

                const container = document.getElementById("Transactions-history");

            const p = document.createElement("p");

          p.innerText = `
          cashout ${convertedCashout} form this ${convertedMainbalance}
          `
         container.appendChild(p)

        }
        else{
         alert("enter a valid pin")
        }
})