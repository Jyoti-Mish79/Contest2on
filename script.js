let ename = document.getElementById('ename');
let pname = document.getElementById('pname');
let age = document.getElementById('age');
let message= document.getElementById('message');
let add = document.getElementById('add');
let tableE = document.getElementById('table');
add.addEventListener('click' , formValidation);
tableE.addEventListener('click' , removeChapter)
function formValidation(e){
let enn = ename.value ;
let prof = pname.value ;
let aname = age.value ;
if(enn !="" && prof !="" && aname !="" ){
    message.innerText="Success : Employee Added!";
    message.style.color="green";
    let row = document.createElement('tr');
    row.innerHTML = `<td>${enn}</td> <td>${prof}</td><td>${aname}</td><td><button class="remove">Delete User</button></td>`;
    table.append(row);
    ename.value = ""; 
    pname.value = "";
    age.value = "";
    function removeChapter(currElement){
        currElement.parentElement.remove();
     }
}
else {
    message.innerText="Error : Please Make sure All the fields are filled before adding in an employee !";
    message.style.color="red";
}
}
function removeChapter(e){
   if(!e.target.classList.contains("remove")){
    return;
   }
   const btn = e.target;
   btn.closest("tr").remove();
}

