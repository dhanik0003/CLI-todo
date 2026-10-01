import { Command } from "commander";
import fs from "fs";
import chalk from "chalk";

const program = new Command();

const file = "./a.txt";

//Add the todo to the list
program
    .command("add <todo>")
    .description("Add the todo to the list")
    .action((todo) => {
        fs.readFile(file, "utf-8", (err, content) => {
            if (err) {
                console.log(chalk.red.bold("Error:") + " " + chalk.white("Unable to read the file"));
            }
            else {
                let data = JSON.parse(content);
                data.list.push(todo);
                data = JSON.stringify(data);
                fs.writeFile(file, data, (err) => {
                    if (err) {
                        console.log(chalk.red.bold("Error:") + " " + chalk.white("Unable to write the file"));
                    }
                    else {
                        console.log(chalk.green("Todo added successfully"));
                    }
                })
            }
        })
    })


//Display the list
program
    .command("show")
    .description("Display the todo the console")
    .action(() => {
        fs.readFile(file, "utf-8", (err, content) => {
            if (err) {
                console.log(chalk.red.bold("Error:") + " " + chalk.white("Unable to read the file"));
            }
            else {
                let data = JSON.parse(content);
                let list = data.list;
                for (let i = 0; i < list.length; i++) {
                    console.log(chalk.cyan(i + 1 + ". " + list[i]));
                }
            }
        })
    })

program
    .command("delete <index>")
    .description("Delete the todo from the list")
    .action((index) => {
        fs.readFile(file, "utf-8", (err, content) => {
            if (err) {
                console.log(chalk.red.bold("Error:") + " " + chalk.white("Unable to read the file"));
            }
            else {
                let data = JSON.parse(content);
                data.list.splice(index - 1, 1);
                data = JSON.stringify(data);
                fs.writeFile(file, data, (err) => {
                    if (err) {
                        console.log(chalk.red.bold("Error:") + " " + chalk.white("Unable to write the file"));
                    }
                    else {
                        console.log(chalk.yellow("Deleted the todo from the list successfully"));
                    }
                })
            }
        })
    })


program.parse();