//definir variable
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Cargar todos los eventos

loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addTask);
}

//Añadir tarea
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //Crear elemento li
  const li = document.createElement("li");
  //añadir clase
  li.className = "collection-item";
  //Crear texto
  li.appendChild(document.createTextNode(taskInput.value));
  //Crear elemento link
  const link = document.createElement("a");
  //añadir clase al elemento link
  link.className = "delete-item secondary-content";
  //añadir icono
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);
  // limpiar datos del input
  taskInput.value = "";

  console.log(li);

  e.preventDefault();
}
