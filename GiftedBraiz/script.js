function clickMe(){
    var menulist = document.querySelector(".menu");
    menulist.classList.toggle("toggle");
}
function chat(){

    document.querySelector(".chat-me").classList.toggle("d-block");
    
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        const btn = this.lastElementChild;

        if( panel.style.display === "block"){
            panel.style.display ="none";
            btn.style.display = "-";
        }else{
            panel.style.display = "block";
            btn.style.display = "+";
        }
    });
}