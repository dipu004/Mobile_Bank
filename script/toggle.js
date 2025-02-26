
document.getElementById("cashout").style.display = "none";
document.getElementById("addmoney").style.display = "none";
document.getElementById("Transactions-history").style.display = "none";

document.getElementById("add-money-box").addEventListener("click" , function(){
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "block";
    document.getElementById("Transactions-history").style.display = "none";
})

document.getElementById("cashout-box").addEventListener("click", function(){
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("Transactions-history").style.display = "none";
})

document.getElementById("Transactions-box").addEventListener("click" , function(){
    document.getElementById("Transactions-history").style.display = "block";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "none";
})