var title=document.getElementById('title')
var desc=document.getElementById('desc')
var date=document.getElementById('date')
var productsDiv=document.getElementById('productsDiv')
var count=0;
function addTask(){
    
    console.log("Task Added"+ count)
      
    if(title.value!=""&&desc.value!=""&&date.value!=""){
        count++;
        createDiv(count) 
        title.value="";
        desc.value="";
        date.value="";
    }
    else{
        document.getElementById('error').innerText="Enter all the details"
    }
    
}

function createDiv(count){
    var taskDiv=document.createElement('div')
    taskDiv.id="taskDiv"+count;
    taskDiv.classList.add("card","w-50","mt-2","m-auto","text-center")
    taskDiv.innerHTML+=` 
    
   
  <div class="card-header">
    Product ${count}
  </div>
  <div class="card-body">
  <h5 class="card-title" id="title${count}" contentEditable="false">${title.value}</h5>
  <p class="card-text"  id="desc${count}" contentEditable="false">${desc.value}</p>
    <button id="edit${count}" class="btn btn-primary" onclick="editTask(${count})"><i class="fa-solid fa-pen-to-square"></i></button>
    <button id="delete${count}"class="btn btn-danger" onclick="deleteTask(${count})"><i class="fa-solid fa-trash-can"></i></button>
    <button id="save${count}"class="btn btn-success" onclick="saveTask(${count})"><i class="fa-solid fa-floppy-disk"></i></button>

  </div>
  <div class="card-footer text-muted" id="date${count}" contentEditable="false">
        ${date.value}
  </div> 
    `
    productsDiv.append(taskDiv)
    productsDiv.style.border="2px solid black"
}
// edit
function editTask(id){
    console.log("Task edited successfully")
    // title/date/desc
    // specific ids
    document.getElementById("title"+id).contentEditable="true"
    document.getElementById("date"+id).contentEditable="true"
    document.getElementById("desc"+id).contentEditable="true"

    // document.getElementById("title").value=document.getElementById("title"+id).value

    document.getElementById("title"+id).style.backgroundColor="lightgrey"
    document.getElementById("date"+id).style.backgroundColor="lightgrey"
    document.getElementById("desc"+id).style.backgroundColor="lightgrey"
    // above div inputbox id.value=id.value

}

// delete
function deleteTask(id){
    console.log("Task deleted successfully")
    let deleteRequest="Are you sure you want to delete this task?"
    if(confirm(deleteRequest)==true){
        document.getElementById("taskDiv"+id).remove()
    }  

}
// update/save
// edit
function saveTask(id){
    console.log("Task updated successfully")
    // title/date/desc
    // specific ids
    document.getElementById("title"+id).contentEditable="false"
    document.getElementById("date"+id).contentEditable="false"
    document.getElementById("desc"+id).contentEditable="false"

    // document.getElementById("title").value=document.getElementById("title"+id).value

    document.getElementById("title"+id).style.backgroundColor="white"
    document.getElementById("date"+id).style.backgroundColor="white"
    document.getElementById("desc"+id).style.backgroundColor="white"
    // above div inputbox id.value=id.value

}