//definir variable
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Cargar todos los eventos

loadEventListeners();

function loadEventListeners() {
  //Añadir tarea
  form.addEventListener("submit", addTask);
  // Eliminar task mediante icono
  taskList.addEventListener("click", removeTask);
  //Borrar todas las tareas
  clearBtn.addEventListener("click", clearTasks);
  //Filtrar las tareas
  filter.addEventListener("keyup", filterTasks);
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

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Borrar tarea
function clearTasks() {
  // taskList.innerHTML = '';

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//filtrar tareas
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
