let nums= document.querySelectorAll(".nums .num");
let section=document.querySelector(".three");
let started=false;

window.onscroll= function() {
    if(window.scrollY>=section.offsetTop) {
       if (!started){       
              nums.forEach((num)=>startCount(num))
              //console.log(!started)
        }
started=true;
    }
}



//console.log(section.offsetTop)
function startCount(el) {
    let goal=el.dataset.goal;
    let count= setInterval(()=> {
        el.textContent++;
        if (el.textContent==goal){
            clearInterval(count);
        }
    },2000/goal );
}

//startCount(document.querySelectorAll(".nums .num")[0])