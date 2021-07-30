// setInterval(()=>{
//     console.log("heelo");
// },2000);

let timeDis=document.getElementById("timeDis");
var time,hour,minutes,second;
setInterval(()=>{
    time=new Date();
    hour=time.getHours();
    let stats="AM";
    if(hour>12){
        hour=hour-12;
        stats="PM";
    }else if(hour==0){
        hour=12;
    }
    minutes=time.getMinutes();
    second=time.getSeconds();
    let hh=String(hour).padStart(2,"0");
    let mm=String(minutes).padStart(2,"0");
    let ss=String(second).padStart(2,"0");
   //console.log(hour+" "+minutes+" "+second+" ");
   timeDis.innerHTML=hh+":"+mm+":"+ss+" "+stats;

},1000);