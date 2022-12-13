// JS for Resume Download Hover Effect

const btn = document.querySelector('.btn');
btn.onmousemove = function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.setProperty('--x', x + 'px');
    btn.setProperty('--y', y + 'px');
}

// JS for Footer Mouse Hover

let list = document.querySelectorAll('.list');
function setActiveClass(){
    list.forEach((item) =>
     item.classList.remove('active'));
     this.classList.add('active')
}

list.forEach((item) => 
 item.addEventListener('mouseover', setActiveClass))