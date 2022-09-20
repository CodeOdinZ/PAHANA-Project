
var oder1st= "(Brown Mat)x ";
var oder2st= "(Ash Mat)x ";
var oder3st= "(Meroon Mat)x ";
var oder4st= "(Yellow Mat)x ";
var oder5st= "(Cromson Mat)x ";

var matprc=4400;
var totalprc=0;

//st means begining stringabove

var cnt1 = 0;
var cnt2 = 0;
var cnt3 = 0;
var cnt4 = 0;
var cnt5 = 0;

var totlcnt1=sessionStorage.getItem("totlcnt1");

supdta=document.getElementById('supdata');
var totlcnt2t=Number(totlcnt1);
supdta.textContent=totlcnt2t;


var cnt1btn = document.getElementById('cnt1')
var cnt2btn = document.getElementById('cnt2')
var cnt3btn = document.getElementById('cnt3')
var cnt4btn = document.getElementById('cnt4')
var cnt5btn = document.getElementById('cnt5')

cnt1btn.addEventListener('click',() => {
    cnt1+=1;
    cnt1btn.textContent=`x${cnt1}`;
    cnt1btn.style.backgroundColor="rgb(249 80 0)";
});

cnt2btn.addEventListener('click',() => {
    cnt2+=1;
    cnt2btn.textContent=`x${cnt2}`;
    cnt2btn.style.backgroundColor="rgb(249 80 0)";
});

cnt3btn.addEventListener('click',() => {
    cnt3+=1;
    cnt3btn.textContent=`x${cnt3}`;
    cnt3btn.style.backgroundColor="rgb(249 80 0)";
});

cnt4btn.addEventListener('click',() => {
    cnt4+=1;
    cnt4btn.textContent=`x${cnt4}`;
    cnt4btn.style.backgroundColor="rgb(249 80 0)";
});

cnt5btn.addEventListener('click',() => {
    cnt5+=1;
    cnt5btn.textContent=`x${cnt5}`;
    cnt5btn.style.backgroundColor="rgb(249 80 0)";
});



//buy btns

var buybtn1 = document.getElementById('add1');
var oder1fnl;
buybtn1.addEventListener('click',()=>{

    oder1fnl = oder1st+cnt1;
    totalprc += matprc*cnt1;
    totlcnt2=cnt1+totlcnt2t;
    sessionStorage.setItem("totlcnt2",totlcnt2);
    supdta.textContent=totlcnt2;
    sessionStorage.setItem("mat1oder",oder1fnl);
    buybtn1.style.backgroundColor="rgb(0 91 203)";

});

var buybtn2 = document.getElementById('add2');
var oder2fnl;
buybtn2.addEventListener('click',()=>{

    oder2fnl = oder2st+cnt2;
    totalprc += matprc*cnt2;
    totlcnt2=cnt2+totlcnt2t;
    sessionStorage.setItem("totlcnt2",totlcnt2);
    supdta.textContent=totlcnt2;
    sessionStorage.setItem("mat2oder",oder2fnl);
    buybtn2.style.backgroundColor="rgb(0 91 203)";

});


var buybtn3 = document.getElementById('add3');
var oder3fnl;
buybtn3.addEventListener('click',()=>{

    oder3fnl = oder3st+cnt3;
    totalprc += matprc*cnt3;
    totlcnt2=cnt3+totlcnt2t;
    sessionStorage.setItem("totlcnt2",totlcnt2);
    supdta.textContent=totlcnt2;
    sessionStorage.setItem("mat1oder",oder3fnl);
    buybtn3.style.backgroundColor="rgb(0 91 203)";

});


var buybtn4 = document.getElementById('add4');
var oder4fnl;
buybtn4.addEventListener('click',()=>{

    oder4fnl = oder4st+cnt4;
    totalprc += matprc*cnt4;
    totlcnt2=cnt4+totlcnt2t;
    sessionStorage.setItem("totlcnt2",totlcnt2);
    supdta.textContent=totlcnt2;
    sessionStorage.setItem("mat4oder",oder4fnl);
    buybtn4.style.backgroundColor="rgb(0 91 203)";

});


var buybtn5 = document.getElementById('add5');
var oder5fnl;
buybtn5.addEventListener('click',()=>{

    oder5fnl = oder5st+cnt5;
    totalprc += matprc*cnt5;
    totlcnt2=cnt5+totlcnt2t;
    sessionStorage.setItem("totlcnt2",totlcnt2);
    supdta.textContent=totlcnt2;
    sessionStorage.setItem("mat5oder",oder5fnl);
    buybtn5.style.backgroundColor="rgb(0 91 203)";

});

var prcd = document.getElementById('prcd');
var browseother = document.getElementById('browse');

prcd.addEventListener('click',()=>{
    sessionStorage.setItem("ttlprc",totalprc);
});

browseother.addEventListener('click',()=>{
    sessionStorage.setItem("ttlprc",totalprc);
});

var totlcnt2=cnt1+cnt2+cnt3+cnt4+cnt5;

