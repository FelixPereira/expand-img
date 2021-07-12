const panels = document.querySelectorAll(".panel");

panels.forEach(panel =>{
    panel.addEventListener("click", () =>{
        classRemove()
        panel.classList.add("active");
    });
});

function classRemove(){
    panels.forEach(panel =>{
        panel.classList.remove("active");
    });
}