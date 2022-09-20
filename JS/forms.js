

//var bk1oderf = sessionStorage.getItem("bk1oder");
//var bk2oderf = sessionStorage.getItem("bk2oder");
//var bk3oderf = sessionStorage.getItem("bk3oder");
//var bk4oderf = sessionStorage.getItem("bk4oder");
//var bk5oderf = sessionStorage.getItem("bk5oder");
//var bk6oderf = sessionStorage.getItem("bk6oder");

//var mat1oderf = sessionStorage.getItem("mat1oder");
//var mat2oderf = sessionStorage.getItem("mat2oder");
//var mat3oderf = sessionStorage.getItem("mat3oder");
//var mat4oderf = sessionStorage.getItem("mat4oder");
//var mat5oderf = sessionStorage.getItem("mat5oder");

//using array

var txtarea = document.getElementById('textarea');

var orderset=[];
orderset[0]= sessionStorage.getItem("bk1oder");
orderset[1]= sessionStorage.getItem("bk2oder");
orderset[2]= sessionStorage.getItem("bk3oder");
orderset[3]= sessionStorage.getItem("bk4oder");
orderset[4]= sessionStorage.getItem("bk5oder");
orderset[5]= sessionStorage.getItem("bk6oder");

orderset[6]= sessionStorage.getItem("mat1oder");
orderset[7]= sessionStorage.getItem("mat2oder");
orderset[8]= sessionStorage.getItem("mat3oder");
orderset[9]= sessionStorage.getItem("mat4oder");
orderset[10]=sessionStorage.getItem("mat5oder");


var ordersfnl="";

for (let i=0;i<11;i++){
    if (orderset[i]===null){
        continue;
        
    }else{

        ordersfnl+=`${orderset[i]}\r\n`;
        console.log(orderset[i]);
    }
}

txtarea.textContent= ordersfnl;







//end using array

var totalmsrp = sessionStorage.getItem("total");
var totalprcmats = sessionStorage.getItem("ttlprc");

var totalf1=Number(totalmsrp);
var totalf2=Number(totalprcmats);


console.log(totalf1);
console.log(totalf2);
console.log(totalf1+totalf2);

var sbttl=totalf1+totalf2;




var totalprice = document.getElementById('tprice');
var confirmb = document.getElementById('confirmbtn');
var back = document.getElementById('backbtn');

totalprice.textContent = `Total: ${sbttl}/=`;

//editing if to erase null

    //txtarea.textContent= `${mat1oderf} \r\n ${mat2oderf} \r\n ${mat3oderf} \r\n${mat4oderf} \r\n${mat5oderf} \r\n (${bk1oderf}) \r\n (${bk2oderf}) \r\n (${bk3oderf}) \r\n (${bk4oderf}) \r\n (${bk5oderf}) \r\n (${bk6oderf}) `;

let pop = document.getElementById('popup');
let popb = document.getElementById('popb');
let subm = document.getElementById('sumit');

confirmb.addEventListener('click',() => {
    pop.style.opacity="1";
    pop.style.top="-637px";
    
    
});

confirmb.addEventListener('click',()=>{
    txtarea.textContent="";
    bk1oderf ="";
    bk2oderf="";
    bk3oderf="";
    bk4oderf="";
    bk5oderf="";
    bk6oderf="";
    sessionStorage.clear()
});

back.addEventListener('click',()=>{
    txtarea.textContent="";
    bk1oderf ="";
    bk2oderf="";
    bk3oderf="";
    bk4oderf="";
    bk5oderf="";
    bk6oderf="";
    sessionStorage.clear()
});


