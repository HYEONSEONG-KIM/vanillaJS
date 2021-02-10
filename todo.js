const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDo';

let toDos = [];



function deleteToDo(event){
    const btn = event.target; //이벤트 대상얻기
    const li = btn.parentNode; //btn에 해당하는 부모
    toDoList.removeChild(li);
    //filter : array안에 있는 속성들을 모두 돌려 함수 실행
    const cleanToDos = toDos.filter(function filterFn(toDo){
        console.log(toDo.id);
        return toDo.id !== parseInt(li.id);
        
    });
    toDos=cleanToDos;
    saveToDos();
}

//브라우저의 storage에는 스트링으로만 저장, JSON.stringify 사용하면 JS에서 쓰던 형태를 string으로 변환
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId =  toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id:newId,
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo(){
    const loadToDos = localStorage.getItem(TODOS_LS);

    //forEach array안의 것들을 한번씩 돌려줌
    if(loadToDos !== null){
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();