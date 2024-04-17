#! /usr/bin/env node
import inquirer from "inquirer";

 let todos = [];

 let condition = true;
while(condition){

let addTask = await inquirer.prompt(
    [
        {
            name: "todo",
            message: "What do you want to add in your todos?",
            type: "input"
        },

        {
            name: "addMore",
            message: "Do you want to add more?",
            type: "confirm",
            default: "false"
        }
    ]
 );
todos.push(addTask.todo);
condition = addTask.addMore
}

// practice
//Added more features

// After adding todos, remove the last added task
let removedTask = todos.pop();
console.log("Removed Task:", removedTask);

console.log("Your todos:", todos);

// Displaying the current list of todos
console.log("Your todos: " + todos.join(", "));