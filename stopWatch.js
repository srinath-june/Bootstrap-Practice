let minEle=document.getElementById('min-ele');
let secEle=document.getElementById('sec-ele');
let mSecEle=document.getElementById('m-sec-ele');

let startBtn=document.getElementById('start-btn');
let stopBtn=document.getElementById('stop-btn');
let resetBtn=document.getElementById('reset-btn');

let min=0;
let sec=0;
let mSec=0;

let flag=true;

function timer()
{
    mSec=mSec+10;

    if(mSec==1000)
    {
        sec=sec+1;
        mSec=0;

        if(sec==60)
        {
            min++;
            sec=0;
        }
    }

    mSecEle.textContent=concatZero(mSec);
    secEle.textContent=concatZero(sec);
    minEle.textContent=concatZero(min);
}


let interval=null;

startBtn.addEventListener('click',function()
{
    if(flag)
    {
        interval=setInterval(timer,10);
        flag=false;
    }
})

stopBtn.addEventListener('click',function()
{
    clearInterval(interval);
    flag=true;
})

resetBtn.addEventListener('click',function()
{
    clearInterval(interval);
    flag=true;
    min=0;
    sec=0;
    mSec=0;
    mSecEle.textContent="00";
    secEle.textContent="00";
    minEle.textContent="00";
})

//Concat Zero When It Is Single Digit
function concatZero(time)
{
    if(time<=9) return "0"+time;
    else return time;
}
