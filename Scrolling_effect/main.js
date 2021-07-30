window.addEventListener('scroll',()=>{
    let content=document.querySelector('.row');
    let contentposition=content.getBoundingClientRect().top;
    let screenposition=window.innerHeight;
    if(contentposition<screenposition){
        content.classList.add('active');
    }
    else{
        content.classList.remove('active');
    }
})