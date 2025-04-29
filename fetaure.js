let string = "kuch bhi";

for(let i =0; i<100; i++){
    console.log();
}

function hello(){
    console.log();
}
hello();
let message = "Hello, this is JavaScript!";
for (let i = 0; i < 10; i++) {
    console.log(`${i + 1}: ${message}`);
}

function greet(name) {
    return `Welcome, ${name}!`;
}

console.log(greet("Harsh"));
let tasks = [];

function addTask(title) {
    const task = {
        id: tasks.length + 1,
        title: title,
        completed: false
    };
    tasks.push(task);
    console.log(`Task added: ${task.title}`);
}

function listTasks() {
    if (tasks.length === 0) {
        console.log("No tasks to show.");
        return;
    }
    console.log("To-Do List:");
    tasks.forEach(task => {
        console.log(`${task.id}. ${task.title} [${task.completed ? "✓" : "✗"}]`);
    });
}

function completeTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        console.log(`Marked task ${id} as completed.`);
    } else {
        console.log(`Task ${id} not found.`);
    }
}

function removeTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        const removed = tasks.splice(index, 1);
        console.log(`Removed task: ${removed[0].title}`);
    } else {
        console.log(`Task ${id} not found.`);
    }
}

// Sample usage
addTask("Learn Git");
addTask("Push to GitHub");
listTasks();
completeTask(1);
removeTask(2);
listTasks();
let string = "hi";