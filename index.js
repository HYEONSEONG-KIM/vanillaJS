const title = document.querySelector("#title");

const CLASS_CLICK = "clicked";

function handleClick(){
   title.classList.toggle(CLASS_CLICK);
}

function init(){
    title.addEventListener("onmouseover",handleClick);
}
init();



/* array object 정렬
const perInfo={name : "Kim",
    age:29,
    gender:"Male",
    favoriteMovie : ["Old Boy","God","HarryPotter"],
    Member : [{name : "Lee",age:25},
    {name : "Prak",age:30}]} */



    /* ``(백틱) 사용과 return
    function sayHello(name,age){
        console.log(`Hello ${name} you are ${age} years old`);
        return `Hello ${name} ${age}`;
    }*/