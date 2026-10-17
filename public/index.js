const nameInput = document.getElementById('u-input');
const greeting = document.getElementById('greet');
const button = document.getElementById('button');
const task = document.getElementById('task');

if(nameInput){
    nameInput.addEventListener('input', ()=>{
        const name = nameInput.value.trim()
        if(name){
            greeting.textContent = `Nice to meet you ${name}`
        }else{
           greeting.textContent = ""  
        }

    })
}




if(button){
    button.addEventListener('click', ()=>{
        const name = nameInput.value.trim()
        task.textContent = name ? name : '' 
    })
}