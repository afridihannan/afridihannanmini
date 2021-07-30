console.log("hello");
function clearerrors() {
    let error=document.getElementsByClassName("formerror");
    for(let item of error){
        item.innerHTML="";
    }
    
}
function seterror(id,error) {
    let element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function validateForm(){
    let returnval=true;
    clearerrors() ;
    let name=document.forms["myForm"]["fname"].value;
    if(name.length<4){
        seterror("name","*Too short to be submitted");
        returnval=false;
    }
    else if(name.length>12){
        seterror("name","*Name cannot be so large");
        returnval=false;
    }
    let phone=document.forms["myForm"]["fphone"].value;
    if(phone.length!=10){
        seterror("phone","**Please fill correct details.Incomplete number")
    }
    let cp=document.forms["myForm"]["fconfirm"].value;
    let pass=document.forms["myForm"]["fPassword"].value;
    if(cp!=pass){
        seterror("confirm","*Password not matched");
        
    }
    return returnval;
}