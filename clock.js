const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:
                            ${minutes <10 ? `0${minutes}` : minutes}:${seconds < 10 ?`0${seconds}` : seconds}`;

}

function init(){
    getTime();
    setInterval(getTime,1000);
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