let receivedText=document.querySelector('.text');
let typeText=receivedText.innerHTML;
let body=document.querySelector("body");
receivedText.innerHTML="";
console.log(typeText.charAt(1));
 let count=-1;
 function typeFunc(){
    count++;
    receivedText.innerHTML += typeText.charAt(count);
    console.log(count);
    if(count == typeText.length){
        clearInterval(stop);
        receivedText.innerHTML="";
        body.style.backgroundColor="red";
        stopCount= setInterval(()=>{
            countFunc();
        
        },100)
        
       
    }
 }
 
let stop=setInterval(()=>{
    typeFunc()


},100)

let countText=document.querySelector('.countText');
let typeCount=countText.innerHTML;
//console.log(typeCount);
countText.innerHTML="";
let countNumber=-1;
function countFunc(){
    countNumber++;
    countText.innerHTML = countNumber;
   // console.log(typeCount.value)
    if(countNumber == typeCount){
        clearInterval(stopCount);
        
}
}

let stopCount="";



