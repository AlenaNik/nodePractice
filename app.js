


// Exersice 2

// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdout,
//     output : process.stdout
// });
// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let answer = num1 + num2;
//
// rl.question(`What is ${ num1 } + ${ num2 }? \n`,
//     (userInput) => {
//     if (userInput.trim() == answer) {
//
//     } else {
//         rl.setPrompt('Incorect response\n');
//         rl.prompt();
//         rl.on('line',(userInput) => {
//             if(userInput.trim() == answer)
//                 rl.close();
//             else {
//                 rl.setPrompt(`Your anwer of ${ userInput } is incorrect \n`)
//                 rl.prompt();
//             }
//         })
//     }
// });
// rl.on('close',() => {
//     console.log('Nice one');
// });

// Exersice 1
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
//
//
// eventEmitter.on('tutorial', (num1,num2) => {
//     console.log(num1+num2);
// });
//
// eventEmitter.emit('tutorial', 1,2);
//
// class Person extends EventEmitter {
//     constructor(name){
//         super();
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
// }
//
// let pedro = new Person('Pedro');
// let cristina = new Person('Christina');
// cristina.on('name', ()=> {
//     console.log('my name is ' + cristina.name);
// })
// pedro.on('name', () => {
//     console.log('my name is ' + pedro.name);
// });
// pedro.emit('name');
// cristina.emit('name');