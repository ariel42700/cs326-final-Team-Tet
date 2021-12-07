let jobs = document.getElementById("jobList").children;

for(let job of jobs) {
    job.firstElementChild.firstElementChild.addEventListener("click", () => {
        job.firstElementChild.firstElementChild.href = "jobdescription.html"
    });
}