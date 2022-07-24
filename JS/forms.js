

var bk1oderf = sessionStorage.getItem("bk1oder");
var bk2oderf = sessionStorage.getItem("bk2oder");
var bk3oderf = sessionStorage.getItem("bk3oder");
var totalmsrp = sessionStorage.getItem("total");


var txtarea = document.getElementById('textarea');
var totalprice = document.getElementById('tprice');

totalprice.textContent = `Total: ${totalmsrp}/=`;
txtarea.textContent= `(${bk1oderf}) \r\n (${bk2oderf}) \r\n (${bk3oderf})`;



