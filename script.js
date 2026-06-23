const counters =
document.querySelectorAll('.counter');

counters.forEach(counter => {

const update = () => {

const target =
+counter.getAttribute('data-target');

const count =
+counter.innerText;

const speed = target / 100;

if(count < target){
counter.innerText =
Math.ceil(count + speed);

setTimeout(update,20);

}else{
counter.innerText = target;
}
};

update();

});

const darkBtn =
document.getElementById('darkModeBtn');

darkBtn.addEventListener('click',()=>{

document.body.classList.toggle('dark');

});

const reviews =
document.querySelectorAll('.review');

let index = 0;

setInterval(()=>{

reviews[index].classList.remove('active');

index++;

if(index >= reviews.length){
index = 0;
}

reviews[index].classList.add('active');

},3000);