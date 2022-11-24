const body= document.querySelector("body"),
    sidebar= body.querySelector(".sidebar"),
    toggle= body.querySelector(".toggle");


toggle.addEventListener("click",(e)=>{
    sidebar.classList.toggle("close");
    e.stopImmediatePropagation();
});
    
    