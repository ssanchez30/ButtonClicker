let btn = document.querySelector('.btn');
let btn2 = document.querySelectorAll('.btn2');
let btn3 = document.querySelector('.btn3');

function changeTxt(){

    btn.textContent = 'Log out';

}

function remove(){
    btn3.remove();
}

function likes(){
    alert("Ninja was liked!");
}


btn.addEventListener('click', changeTxt);

for (let i=0; i<btn2.length; i++){
    btn2[i].addEventListener('click', likes);
}

btn3.addEventListener('click', remove);