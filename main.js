#!user/envo node
import inquirer from "inquirer";
let input = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence To finf out How many number there are ?"
    }
]);
let counter = input.sentence.trim().split(" ");
console.log(counter);
console.log(`In Your sentence the number of Words are : ${counter.length}`);
