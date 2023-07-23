const addButton = document.querySelector('#add_button');
const tbodyElement = document.querySelector('tbody');

function addTask() {
    
    const taskcontent = prompt("Enter Task number: ")
    const descriptionContent = prompt("Enter Desccription of the task: ")
    const duration = prompt("Enter duration of the task ")


    const newRow = document.createElement('tr')
    const cellTask = document.createElement('td') 
    const cellDesc = document.createElement('td')
    const cellDur = document.createElement('td')


    cellTask.textContent = taskcontent
    cellDesc.textContent= descriptionContent
    cellDur.textContent = duration

    newRow.appendChild(cellTask)
    newRow.appendChild(cellDesc)
    newRow.appendChild(cellDur)

    tbodyElement.appendChild(newRow)

}

addButton.addEventListener('click', addTask);



const success_button = document.querySelector('#success_button')

success_button.addEventListener('click',popout)


function popout() {
    alert("Hurray..!! Seeya Tomorrow..")
}




      
const remove_button = document.querySelector('#remove_button')

remove_button.addEventListener('click',remove_task)

function remove_task(){

  const to_remove = prompt("Enter task number to remove the task: ")
    
  const table = document.getElementById("table1");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const cellTask = rows[i].getElementsByTagName("td")[0];
    if (cellTask.textContent === to_remove) {
      table.deleteRow(i);
      return; // Exit the function after removing the row
    }
    
  alert("No such task, please enter the correct task number!");

}
}