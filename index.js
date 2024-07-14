const field = document.querySelector("#todo-field");
const time= document.querySelector("#todo-time");
const add= document.querySelector("#add");
const filter = document.querySelector("#filter");
const wrapper = document.querySelector("#wrapper")



function  getDate(){
    let date=[]

if(localStorage.getItem('todos')){
    date=Json.parse(localStorage.getItem("todos"))
}




    return date
}



function validate (field,time){
if(field.value<5){
alert("to do kamda 6 ta harfdan iborat bolsin ")
  field.style.outlineColor="red"
field.focus()
    return false

}
if(time.value){
    if(time){
        alert("time tanlangan boliwi kerak ")
        time.style.outlineColor="red"
        time.focus()
            return false
}




    return true;
}

add&& add.addEventListener("click", function(event){
    event.preventDefault()
    const isValid=validate(field,time)
    if(!isValid){
        return;
    }





// let todo ={
//     name:field.value,
//     time:time.value,
//     status:"active",
//     id: Date.now()
// }





})}



let todo ={
    name:field.value,
    time:time.value,
    status:"active",
    id: Date.now()
}




let todos=getData()
todos.push(todo);
localStorage.setItem('todos',Json.strimgify(todos))
field.value=null
time.value=null;

