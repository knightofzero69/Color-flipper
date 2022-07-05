'use strict';

const btn= document.querySelector('.btn');
const doc1=document.querySelector('.body');
const cont=document.querySelector('.color-name');


//1 generate a set of random numbers
const grandom=function(){
    let a=0;
    let b;
    b=Math.floor(Math.random()*1000);
    b<=255 ? a=b:b=0;
    return a;
}


//logic-- main function

const colorflipper=function(){
    let a=grandom();
    let b=grandom();
    let c=grandom();
    doc1.style.cssText += `color:red;background-color: rgba(${a},${b},${c})`;
    cont.textContent=`rgb(${a},${b},${c})`;
    cont.style.cssText+=`background-color: rgba(${a},${b},${c})`

}


btn.addEventListener('click',colorflipper);