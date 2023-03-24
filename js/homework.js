let number=document.querySelectorAll(".num");
let numArray=Array.from(number);
let color=["red","green","blue","tomato","orange","pink","purple","indigo","yellow","magenta"]

    numArray.map(item=>{
    let getNum=item.innerHTML;   
    console.log(item.dataset.speed)
    item.innerHTML="";
    let increment=-1;
    let countNum=-1;
    function count(){
        increment ++;
        countNum++;
        item.innerHTML=`<span  style="color:${countNum == color.length ? (color[countNum],countNum=-1): color[countNum]}">${increment}</span>`;
       
        if(increment === parseInt(getNum)){
            clearInterval(stop)
        }
    
    }
    
    let stop=setInterval(()=>{
        count()
    },item.dataset.speed)
    
    })
    



/* window.addEventListener("scroll",function(){
    if(window.pageYOffset > 300){
        scrollCount()
       
    }
    else{

       
    }
    
})
console.log(window.pageYOffset); */