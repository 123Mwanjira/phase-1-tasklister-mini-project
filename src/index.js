const form = document.querySelector("#create-task-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = document.querySelector("#new-task-description").value;

  buildToDo(task);
});

function buildToDo(task) {
  const taskList = document.querySelector("#tasks");

  const li = document.createElement("li");
  li.textContent = task;

  taskList.append(li);
}