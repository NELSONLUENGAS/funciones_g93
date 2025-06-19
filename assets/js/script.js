// Ejercicio #1 --> cambiar estilos

// const borderColor = function (event, color = 'yellow') {
// 	event.target.style.borderColor = color;
// };

// document
// 	.querySelector('#tarea_1')
// 	.addEventListener('click', (event) => borderColor(event, 'red'));

// document.querySelector('#tarea_2').addEventListener('click', function () {
// 	this.style.backgroundColor = 'red';
// });

// document.querySelector('#tarea_3').addEventListener('click', (event) => {
// 	event.target.style.backgroundColor = 'red';
// 	console.log(event.target);
// });

// document.querySelector('#tarea_4').addEventListener('click', (event) => {
// 	event.target.style.backgroundColor = 'red';
// 	console.log(event.target);
// });

// document.querySelector('#tarea_5').addEventListener('click', (event) => {
// 	event.target.style.backgroundColor = 'red';
// 	console.log(event.target);
// });

// document.querySelectorAll('p').forEach((element) => {
// 	element.addEventListener('click', (event) => borderColor(event, 'red'));
// });

// Ejercicio #2 --> Crear una nueva tarea
// const addTask = (tarea = 'Nueva tarea') => {
// 	// obtener el contenedor
// 	const tasksContainer = document.getElementById('tasks_container');

// 	// 	// crear la tarea y asignat texto
// 	const newTask = document.createElement('p');
// 	newTask.innerText = tarea;
// 	newTask.classList = ['p-3 border rounded cursor-pointer'];
// 	// agregar la tarea al contenedor
// 	tasksContainer.appendChild(newTask);
// };

// document.getElementById('add_task').addEventListener('click', () => addTask('Tarea siguiente'));

//Ejercicio #3 --> Cambiar el color en base a prioridad
const getPriorityColor = (priority) => {
	switch (priority) {
		case '1':
			return 'bg-red-500';
		case '2':
			return 'bg-yellow-500';
		case '3':
			return 'bg-green-500';
		default:
			return 'bg-gray-500';
	}
};

document.addEventListener('keydown', function (event) {
	const priority = event.key;

	if (priority === '1') {
		document
			.querySelector('#tarea_1')
			.classList.toggle(getPriorityColor(priority));
	} else if (priority === '2') {
		document
			.querySelector('#tarea_1')
			.classList.toggle(getPriorityColor(priority));
	} else if (priority === '3') {
		document
			.querySelector('#tarea_1')
			.classList.toggle(getPriorityColor(priority));
	} else {
		document
			.querySelector('#tarea_1')
			.classList.toggle(getPriorityColor(priority));
		// addTask('Tarea por default');
	}
});
