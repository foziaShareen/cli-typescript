import inquirer from "inquirer";
let user = inquirer.
    prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "age",
        message: "How old are you?"
    },
    {
        type: "list",
        name: "programming language",
        message: "What is your favorite programming language?",
        choices: ["javascript", "c#", "python"]
    }
]).then((data) => {
    console.log(data);
});
