import { Command } from "commander";
import fs from "fs/promises";
import chalk from "chalk";

const program = new Command();

const file = "./a.txt";


async function readTodos() {
    const content = await fs.readFile(file, "utf-8");
    return JSON.parse(content);
}

async function writeTodos(data) {
    await fs.writeFile(file, JSON.stringify(data));
}


//Add the todo to the list
program
    .command("add <todo>")
    .description("Add the todo to the list")
    .action(async (todo) => {
        try {

            if (todo.trim() === "") {
                console.log(chalk.red.italic("Todo cannot be empty"));
                return;
            }

            const data = await readTodos();

            todo = todo.trim();
            data.list.push(todo);

            await writeTodos(data);

            console.log(chalk.green("Todo added successfully"));

        }
        catch (err) {
            console.log(chalk.red.bold("Error:") + " " + chalk.white("Unable to add todo"));
        }
    })

//Display the List
program
    .command("show")
    .description("Display the todo the console")
    .action(async () => {
        try {

            const data = await readTodos();

            if (data.list.length === 0) {
                console.log(chalk.red.italic("No todos found."));
                return;
            }

            for (let i = 0; i < data.list.length; i++) {
                console.log(chalk.cyan(`${i + 1}. ${data.list[i]}`));
            }

        }
        catch (err) {
            console.log(chalk.red.bold("Error:") + " " + chalk.white("Unable to display the todo list"));
        }


    })

//Delete the todo from the list
program
    .command("delete <index>")
    .description("Delete the todo from the list")
    .action(async (index) => {
        try {

            const todoIndex = Number(index);

            if ((!Number.isInteger(todoIndex)) || (todoIndex < 1)) {
                console.log(chalk.red.italic("Invalid list number"));
                return;
            }

            const data = await readTodos();

            if (todoIndex > data.list.length) {
                console.log(chalk.red.italic("Todo not found."));
                return;
            }

            data.list.splice(todoIndex - 1, 1);

            await writeTodos(data);

            console.log(chalk.yellow("Todo deleted successfully."));
        }
        catch (err) {
            console.log(chalk.red.bold("Error:") + " " + chalk.white("Unable to delete the todo"));
        }


    })


program.parse();