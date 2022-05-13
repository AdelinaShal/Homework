// Task 2*

// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

// const fs = require('fs')
// const users = JSON.parse(fs.readFileSync("./task2.json"))

// let uniquePersons = []
// users.forEach((el) => {
//     if (uniquePersons.Persons.indexOf(JSON.stringify(el)) === -1) {
//         uniquePersons.push(JSON.stringify(el));
//     }
// }) 

// let checkid = Array.from(new Set(users.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
// console.log(checkid)
 
const fs = require("fs")
let rawUsers = fs.readFileSync("task2.json")
let = JSON.parse(rawUsers);

let uniqueUsers = users.reduce(
    (unique, user) => {
        if (unique.map[user.name]) return unique;

        unique.map[user.name] = true;
        unique.uniqueUsers.push(user);
        return unique;
        }, 
        {
        map: {},   
        uniqueUsers: [],
        }

) .uniqueUsers;
console.log(uniqueUsers);