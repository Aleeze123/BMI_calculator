#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const input1 = await inquirer.prompt([
    {
        "name": "weightInkg",
        "type": "number",
        "message": chalk.cyanBright("Enter your weight in kilogram(kg)"),
    }
]);
const input2 = await inquirer.prompt([
    {
        "name": "heightInmeter",
        "type": "number",
        "message": chalk.cyanBright("Enter your height in meter(m)"),
    }
]);
let weight = input1.weightInkg;
console.log(chalk.magenta(`Your Weight is ${weight}kg`));
let height = input2.heightInmeter;
console.log(chalk.magenta(`Your Height is ${height}meter`));
let BMI = weight / (height * height);
console.log(chalk.yellowBright(`Your BMI is ${BMI}`));
