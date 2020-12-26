// Author info: https://github.com/kparkitny

const form = document.querySelector('form');
const ol = document.querySelector('ol');
const taskNumber = document.querySelector('h2 span.todoCount');
const doneNumber = document.querySelector('h2 span.doneCount');
const listItems = document.getElementsByClassName('task');
const doneList = document.getElementsByClassName('doneList');
const input = document.querySelector('input');

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = `${titleTask} <button class='removeBtn'>Usuń</button><button class='doneBtn'>Zrobione</button>`;
    ol.appendChild(task);
    taskNumber.textContent = listItems.length;
    input.value = '';
    task.querySelector('.removeBtn').addEventListener('click', removeTask);
    task.querySelector('.doneBtn').addEventListener('click', doneTask);
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
    doneNumber.textContent = doneList.length;
}

const doneTask = (e) => {
    e.target.parentNode.style.textDecoration = 'line-through';
    e.target.parentNode.classList.add('doneList');
    doneNumber.textContent = doneList.length;
    if (doneList.length == listItems.length) {
        alert('Gratulację! Wszystie zadania wykonane!')
    }
}

form.addEventListener('submit', addTask)