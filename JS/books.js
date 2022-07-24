
var bk1oder;
var bk2oder;
var bk3oder;

var bk1msrp = 400;
var bk2msrp = 400;
var bk3msrp = 400;
var totalmsrp = 0;

var bk1 = 'Lama Manasata Jawaya X ';
var bk2 = 'Asirimath Hudakalawa X ';

var markbtn= document.getElementById('markbutn');
markbtn.addEventListener('click',() => {
    document.location="purchases.html";
    markbtn.style.boxShadow="0px 0px 0px 0px";
    markbtn.style.top="24px";

});



var countbtn1 = document.getElementById('cntbtn1');
var count1 = 1;
countbtn1.addEventListener('click',() => {
    count1=count1+1;
    countbtn1.textContent= `x${count1}`;
    countbtn1.style.backgroundColor="rgb(249 80 0)";
});

var buybtn1 = document.getElementById('bybtn1');
buybtn1.addEventListener('click',()=>{
    bk1oder = bk1 + count1;
    totalmsrp += bk1msrp*count1;
    
    buybtn1.style.backgroundColor="rgb(0 91 203)";
    console.log(bk1oder);
    sessionStorage.setItem("bk1oder",bk1oder);
});


var countbtn2 = document.getElementById('cntbtn2');
var count2 = 1;
countbtn2.addEventListener('click',() => {
    count2=count2+1;
    countbtn2.textContent= `x${count2}`;
    countbtn2.style.backgroundColor="rgb(249 80 0)";
});
var buybtn2 = document.getElementById('bybtn2');
buybtn2.addEventListener('click',()=>{
    bk2oder = bk2 + count2;
    totalmsrp += bk2msrp*count2;
    
    buybtn2.style.backgroundColor="rgb(0 91 203)";
    console.log(bk2oder);
    sessionStorage.setItem("bk2oder",bk2oder);
});



var countbtn3 = document.getElementById('cntbtn3');
var count3 = 1;
countbtn3.addEventListener('click',() => {
    count3=count3+1;
    countbtn3.textContent= `x${count3}`;
    countbtn3.style.backgroundColor="rgb(249 80 0)";
});

var buybtn3 = document.getElementById('bybtn3');
buybtn3.addEventListener('click',()=>{
    bk3oder = bk3 + count3;
    totalmsrp += bk3msrp*count3;
    
    buybtn3.style.backgroundColor="rgb(0 91 203)";
    console.log(bk3oder);
    sessionStorage.setItem("bk3oder",bk3oder);
});


var proceed = document.getElementById('proceed');

proceed.addEventListener('click', () => {
    sessionStorage.setItem("total",totalmsrp);
})



