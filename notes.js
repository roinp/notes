
const notes = document.getElementById('notes');
const note = document.getElementById('note');
const save = document.getElementById('save');
const date = document.getElementById('date1');
const add = document.getElementById('add');
 
date.textContent = getCurrentDate();

setInterval(function(){
    date.textContent = getCurrentDate();
},1000)
 

function getCurrentDate(short = false){
    const date = new Date();
    if(short){
        return date.toLocaleTimeString();    
    }
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}


 function activateTextarea(){
    note.removeAttribute('disabled');
    note.focus();
    note.setAttribute('placeholder','type here');
 }

 function clearTextarea(){
    note.value = ""
    note.setAttribute('disabled', true);
    note.removeAttribute('placeholder');
 }
 
function addNote(){
    const li = document.createElement('li');
    const p = document.createElement('p');
    const noteTextElement = document.createElement('p');
    const span = document.createElement('span');

    li.addEventListener("click", editNote);
    
    p.textContent = note.value.substring(0,10);
    
    noteTextElement.textContent = note.value;
    noteTextElement.style.display = "none";
    
    span.textContent = getCurrentDate(true);
    
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(noteTextElement);
    
    notes.appendChild(li);

}

save.addEventListener('click', function(){
    addNote();
    clearTextarea();
    
} ) 

add.addEventListener('click',function(){
    activateTextarea();
});
 
function editNote(event){
  const text = event.currentTarget.children[2].textContent;
    note.value = text;
    activateTextarea();
}
 

