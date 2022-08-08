const container = document.querySelector('.container');
const events = document.querySelector('.events');
const timer = document.querySelector('.timer');
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2');
const laps = document.querySelector('.laps');


let count = {
    m:0,
    s:0,
    ms:0
};
let inter;

const addZero = (num) => {
    if(num <= 9) {
        num = "0" + num;
    }
    return num;
}

timer.innerHTML = addZero(count['m']) + " m " + " : " + 
addZero(count["s"]) + " s " + " : " + addZero(count["ms"]) + " ms";

     btn1.setAttribute('disabled', '');
      btn2.setAttribute('disabled', '');

const onRun = () => {
    if(count.s === 60) {
        count.m++;
        count.s = 0;
    }
    if(count.ms === 100) {
        count.s++;
        count.ms = 0;
    }
    count.ms++;
    return timer.innerHTML = addZero(count.m) + " m "  + " : " +
     addZero(count.s) + " s "  + " : " + addZero(count.ms) + " ms";
}

const myFuc = () => {
    let counts = onRun();
    timer.innerHTML = counts;
}
 
const Run = () => {
    inter = setInterval(myFuc, 10);
    btn.setAttribute('disabled', ' ')
     btn1.removeAttribute('disabled');
      btn2.removeAttribute('disabled');
}

const Pause = () => {
    let Ary = [];
    if(btn1.innerHTML === "Pause") {
        clearInterval(inter);
        btn1.innerHTML = "Run";
        Ary.push(addZero(count.m) + " m "  + " : " +
     addZero(count.s) + " s "  + " : " + addZero(count.ms) + " ms");

     let div = `<div>`
        Ary.map(res => {
            div += `<h1 class= 'h1'>${res}</h1>`
        })
        div += `</div>`;
        laps.innerHTML += div;

    } else {
        Run()
         btn1.innerHTML = "Pause";
    }
    return Ary;
}

const Reset = () => {
   clearInterval(inter);
   timer.innerHTML = "00 m : 00 s : 00 ms";
   count = {m:0  , s:0 , ms: 0};
   btn.removeAttribute('disabled');
    btn1.setAttribute('disabled', ' ');
     btn2.setAttribute('disabled', ' ');
     btn1.innerHTML = "Pause";

     let h1 = document.querySelectorAll('.h1');
     for(let i = 0; i< h1.length;i++) {
        h1[i].remove();
     }
}

btn.addEventListener('click', Run, false);
btn1.addEventListener('click', Pause, false);
btn2.addEventListener('click', Reset, false);
  


 
  
  
  

