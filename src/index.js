document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  const userInput = document.createElement("input");
    userInput.type = "text";
    userInput.id = "task-user";
    userInput.placeholder = "Assigned to";

    const durationInput = document.createElement("input");
    durationInput.type = "number";
    durationInput.id = "task-duration";
    durationInput.placeholder = "Duration (hours)";

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "task-due-date";
    form.appendChild(userInput);
    form.appendChild(durationInput);
    form.appendChild(dueDateInput);


  const tasks = []; 

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const taskText = input.value.trim();
      const taskUser = userInput.value.trim();
      const taskDuration = durationInput.value.trim();
      const taskDueDate = dueDateInput.value;

      if (taskText) {
        const taskObj = { text: taskText, user: taskUser, duration: taskDuration, dueDate: taskDueDate };
          tasks.push(taskObj);
          displayTasks();
          form.reset();

      }
  });

  function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${task.text}</strong> - Assigned to: ${task.user}, Duration: ${task.duration} hours, Due: ${task.dueDate}`;
        
        const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "❌";
          deleteBtn.style.marginLeft = "10px";
          deleteBtn.addEventListener("click", () => {
              tasks.splice(index, 1);
              displayTasks();
          });

          listItem.appendChild(deleteBtn);
          taskList.appendChild(listItem);
      });
  }

  function getPriorityColor(priority) {
      return priority === "high" ? "red" : priority === "medium" ? "yellow" : "green";
  }

  function getRandomPriority() {
      const priorities = ["high", "medium", "low"];
      return priorities[Math.floor(Math.random() * priorities.length)];
  }
});