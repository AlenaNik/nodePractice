



////// changing the name of the file
// const fs = require('fs');
// fs.rename('example.txt', 'bananas.txt', (err) => {
//     if (err)
//         console.log(err);
//     else console.log('changesname')
// });
//

// Reading and creating file
// const fs = require('fs');
// fs.writeFile('example.txt', "this is an exampple", (err) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log('File created');
//         fs.readFile('example.txt', 'utf8', (err, file)=> {
//            if(err)
//                console.log(err);
//            else
//                console.log(file);
//         });
//
//     }
// });





/////////////////
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
//
// ///////////////////
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