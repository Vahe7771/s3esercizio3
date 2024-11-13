document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Per cortesia,scrivi una cosa da fare!");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = taskValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️ ";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    taskInput.value = ""; 
}
