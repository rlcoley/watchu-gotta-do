const input = document.getElementById('i-gotta')
const submit = document.getElementById("submit") 
let tasks = document.getElementById('tasks')
let theTask = ""



function subTask(){
    theTask = input.value
    console.log(theTask)
    tasks.innerText = theTask
    input.value = " "
    console.log("chill")
}