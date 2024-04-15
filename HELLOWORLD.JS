const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question("qual é o seu nome? ", (nome) => {
console.log('ola, ${nome}! Bem vindo ao node.js.');
rl.close();


})