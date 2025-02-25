 document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const acountNumber = document.getElementById("Acount-number").value;

    const Pin = document.getElementById("PIN").value;
   const convertedPin = parseInt(Pin)
     if(acountNumber.length === 11){
          if(convertedPin===1234){
          window.location.href="/main.html"
          
          }
          else{
            alert("pin thik nai");
          }
     }
     else{
        alert("need valid acount");
     }
    
})
