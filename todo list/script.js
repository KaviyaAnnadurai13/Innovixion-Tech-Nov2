const inputbox=document.getElementById("inputbox");
const listcontainer=document.getElementById("listcontainer");
function addtask(){
    if(inputbox.value==''){
        alert("You Must Write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
       
        span.innerHTML = `
        <i class="fa-regular fa-pen-to-square edit"></i>
        <i class="fa-solid fa-xmark xmark"></i>`;
        li.appendChild(span);
        
    }
    inputbox.value="";
    savedata();
}
listcontainer.addEventListener("click",function(e){
    console.log(e.target);
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.classList.contains("xmark")){
      e.target.closest("li").remove();
      savedata();
    }
    else if(e.target.classList.contains("edit")){
        let text = e.target.closest("li").textContent;
        let edit =  e.target.closest("li");
        if(text != null){
            let newtext = prompt("edit" +":"+ text );   
            edit.textContent = newtext;
            edit.appendChild( e.target.closest("span"));
        }
    }

});

function savedata(){
    localStorage.setItem("datas" ,listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("datas");
}
showtask();