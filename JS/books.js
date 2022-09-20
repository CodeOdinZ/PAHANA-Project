
var bk1oder;
var bk2oder;
var bk3oder;
var bk4oder;
var bk5oder;
var bk6oder;

var bk1msrp = 250;
var bk2msrp = 400;
var bk3msrp = 160;
var bk4msrp = 150;
var bk5msrp = 200;
var bk6msrp = 160;
var totalmsrp=0;
var totlcnt2=sessionStorage.getItem("totlcnt2");

var totlcnt1=Number(totlcnt2);

var supdta=document.getElementById('supdata');
supdta.textContent=totlcnt1;

var bk1 = 'Lama Manasata Jawaya X ';
var bk2 = 'Asirimath Hudakalawa X ';
var bk3 = 'Dewena Thawena Tharunya X ';
var bk4 = 'Wishwaye Yatharthaya ha Mama X ';
var bk5 = 'Alena Gatena Sitha X ';
var bk6 = 'Pawathmaka Nawathma X ';

var markbtn= document.getElementById('markbutn');
markbtn.addEventListener('click',() => {
    document.location="purchases.html";
    markbtn.style.boxShadow="0px 0px 0px 0px";
    markbtn.style.top="24px";

});



var countbtn1 = document.getElementById('cntbtn1');
var count1 = 0;
countbtn1.addEventListener('click',() => {
    count1=count1+1;
    countbtn1.textContent= `x${count1}`;
    countbtn1.style.backgroundColor="rgb(249 80 0)";
});

var buybtn1 = document.getElementById('bybtn1');
buybtn1.addEventListener('click',()=>{
    bk1oder = bk1 + count1;
    totalmsrp += bk1msrp*count1;
    totlcnt1+=count1;
    sessionStorage.setItem("totlcnt1",totlcnt1);
    supdta.textContent=totlcnt1;
    
    buybtn1.style.backgroundColor="rgb(0 91 203)";
    console.log(bk1oder);
    sessionStorage.setItem("bk1oder",bk1oder);
});


var countbtn2 = document.getElementById('cntbtn2');
var count2 = 0;
countbtn2.addEventListener('click',() => {
    count2=count2+1;
    countbtn2.textContent= `x${count2}`;
    countbtn2.style.backgroundColor="rgb(249 80 0)";
});
var buybtn2 = document.getElementById('bybtn2');
buybtn2.addEventListener('click',()=>{
    bk2oder = bk2 + count2;
    totalmsrp += bk2msrp*count2;
    totlcnt1+=count2;
    sessionStorage.setItem("totlcnt1",totlcnt1);
    supdta.textContent=totlcnt1;

    
    buybtn2.style.backgroundColor="rgb(0 91 203)";
    console.log(bk2oder);
    sessionStorage.setItem("bk2oder",bk2oder);
});



var countbtn3 = document.getElementById('cntbtn3');
var count3 = 0;
countbtn3.addEventListener('click',() => {
    count3=count3+1;
    countbtn3.textContent= `x${count3}`;
    countbtn3.style.backgroundColor="rgb(249 80 0)";
});

var buybtn3 = document.getElementById('bybtn3');
buybtn3.addEventListener('click',()=>{
    bk3oder = bk3 + count3;
    totalmsrp += bk3msrp*count3;
    totlcnt1+=count3;
    sessionStorage.setItem("totlcnt1",totlcnt1);
    supdta.textContent=totlcnt1;
    
    buybtn3.style.backgroundColor="rgb(0 91 203)";
    console.log(bk3oder);
    sessionStorage.setItem("bk3oder",bk3oder);
});


var countbtn4 = document.getElementById('cntbtn4');
var count4 = 0;
countbtn4.addEventListener('click',()=>{
    count4+=1;
    countbtn4.textContent=`x${count4}`;
    countbtn4.style.backgroundColor="rgb(249 80 0)";

})

var buybtn4 = document.getElementById('bybtn4');
buybtn4.addEventListener('click',()=>{
    bk4oder = bk4 + count4;
    totalmsrp += bk4msrp*count4;
    totlcnt1+=count4;
    sessionStorage.setItem("totlcnt1",totlcnt1);
    supdta.textContent=totlcnt1;
    
    buybtn4.style.backgroundColor="rgb(0 91 203)";
    console.log(bk4oder);
    sessionStorage.setItem("bk4oder",bk4oder);
});






var countbtn5 = document.getElementById('cntbtn5');
var count5 = 0;
countbtn5.addEventListener('click',()=>{
    count5+=1;
    countbtn5.textContent=`x${count5}`;
    countbtn5.style.backgroundColor="rgb(249 80 0)";

})
var buybtn5 = document.getElementById('bybtn5');
buybtn5.addEventListener('click',()=>{
    bk5oder = bk5 + count5;
    totalmsrp += bk5msrp*count5;
    totlcnt1+=count5;
    sessionStorage.setItem("totlcnt1",totlcnt1);
    supdta.textContent=totlcnt1;
    
    buybtn5.style.backgroundColor="rgb(0 91 203)";
    console.log(bk5oder);
    sessionStorage.setItem("bk5oder",bk5oder);
});




var countbtn6 = document.getElementById('cntbtn6');
var count6 = 0;
countbtn6.addEventListener('click',()=>{
    count6+=1;
    countbtn6.textContent=`x${count6}`;
    countbtn6.style.backgroundColor="rgb(249 80 0)";

});

var buybtn6 = document.getElementById('bybtn6');
buybtn6.addEventListener('click',()=>{
    bk6oder = bk6 + count6;
    totalmsrp += bk6msrp*count6;
    totlcnt1+=count6;
    sessionStorage.setItem("totlcnt1",totlcnt1);
    supdta.textContent=totlcnt1;
    
    buybtn6.style.backgroundColor="rgb(0 91 203)";
    console.log(bk6oder);
    sessionStorage.setItem("bk6oder",bk6oder);
});


























var proceed = document.getElementById('proceed');
var market = document.getElementById('markbutn');


proceed.addEventListener('click', () => {
    sessionStorage.setItem("total",totalmsrp);
});

market.addEventListener('click',()=>{
    sessionStorage.setItem("total",totalmsrp);
});




