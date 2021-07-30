console.log("Hello")
getJObs().then(data=>{
    showJobs(data);
});
document.querySelector("#find").addEventListener("click",()=>{
    let text=document.getElementById("filter-jobs").value;
    console.log(text,'what is text??');
    getJObs().then(jobs=>{
        let filterEDjobs=filter_jobs(jobs,text);
        // console.log(filterEDjobs);
        showJobs(filterEDjobs);
    })
})
// document.getElementsByClassName("button")[0].addEventListener("click",()=>{
//     alert("Dont click")
// })
function getJObs(){
    return fetch("data.json").then(response=>response.json()).then(data=>{
        console.log(data);
        return data;
    })
}
function showJobs(jobs){
    let jbsCont=document.querySelector('.jobs-container');
    let jobsHTML="";
    jobs.forEach(job => {
        // console.log(job);
        jobsHTML+=`<div class="job-tile">
        <div class="top">
            <img src="${job.logo} alt="image">
            <span class="material-icons more_horiz">more_horiz</span>
        </div>
        <div class="rolename">
            <span>"${job.roleName}"</span>
        </div>
        <div class="desc">
            <span>"${job.requirements.content}"</span>
        </div>
        <div class="btns">
            <div class="button apply-now">
                Apply Now
            </div>
            <div class="button">
                Message
            </div>
        </div>
    </div>`
    });
    jbsCont.innerHTML=jobsHTML;
}
function filter_jobs(jobs,searchText){
    if(searchText){
        let filterEDjobs=jobs.filter(job=>{
             if(job.roleName.toLowerCase().includes(searchText)||job.type.toLowerCase().includes(searchText)||job.company.toLowerCase().includes(searchText)||job.requirements.content.toLowerCase().includes(searchText)){
                 return true;
             }else{
                 return false;
             }
        })
        return filterEDjobs;
    }
    else{
        return jobs;
    }
}
getJObs();


