console.log("Hello clock");
let time=document.getElementById("timer");
let t1,t2;
//time.innerHTML=t1+":"+t2;
 
function start(){
        t2=t2+1;
        if(t2>59){
            t2=0;
            t1++;
        }
        num1=String(t1).padStart(2,'0');
        num2=String(t2).padStart(2,'0');
        time.innerHTML=num1+":"+num2;
}
var myTime;
function started(){
    clearInterval(myTime);
    t1=0,t2=0;
    myTime=setInterval(start,1000);
}
function stoped(){
    clearInterval(myTime);
}
function resume(){
    started();
}
function reset(){
    console.log("Clicked")
    clearInterval(myTime);
    t1=0;t2=0;
    time.innerHTML="Timer Reseted";
}

