let receivedTextClass=document.querySelectorAll(".text");
let textArray=Array.from(receivedTextClass);
let color=["red","green","blue","tomato","orange","pink","purple","indigo","yellow","magenta"]
console.log(textArray);
textArray.map(item =>{
    //console.log((item.dataset.speed));
   // console.log(item.innerHTML)
   let typeText = item.innerHTML;
   item.innerHTML="";
  
   
   let count=-1;
    function typeFun(){
        count ++;
      item.innerHTML +=`<span style="color:${color[count]}">${typeText.charAt(count)}</span>`
      if(count === typeText.length){
          item.innerHTML="";
          count=-1;

      }
    }

    setInterval(()=>{
        typeFun()
    },item.dataset.speed)
})










/* this code use for single line typing

let text=document.querySelector(".typeText");
//console.log(text.innerHTML);
let typeText=text.innerHTML;
text.innerHTML="";
console.log(typeText.charAt(0));


let count=-1;
function typejs(){
    count ++;
    console.log(count);
    text.innerHTML+=typeText.charAt(count);
    console.log(text.innerHTML);
    if(count === typeText.length){
        ///clearInterval(stop)
        text.innerHTML="";
        count=-1;

    }

}


let stop=setInterval(()=>{
    typejs()
},1000) */