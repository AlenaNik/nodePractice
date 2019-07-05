const fs = require('fs');

fs.readdir('example', (err, files) => {
    err ? console.log('oops') : for(let file of files) {
        fs.unlink('./example/' + file,(err) => {
            err ? console.log(err) :  console.log('deleted')
        })
    }
});
// DELETE a few files from folder


// fs.mkdir('lotsofbananas', (err) => {
//     err ? console.log('error') : fs.writeFile('./lotsofbananas/banana1.txt', 'Hey I got bananas for you', (err) => {
//         err ? console.log('error') : fs.writeFile('./lotsofbananas/banana2.txt', 'Another bunch of bananas', (err) => {
//             err ? console.log('error') : console.log(`I'm done here`)
//         });
//     });
// });
//
//  fs.unlink('./lotsofbananas/banana1.txt', (err) => {
//      err ? console.log('error') : fs.unlink('./lotsofbananas/banana2.txt', (err) => {
//          err ? console.log('error') : fs.rmdir('lotsofbananas', (err) => {
//               err ? console.log('error') : console.log ('deleted stuff')
//      })
//   })
// });


//DELETE FOLDERS AND FILES
// fs.unlink('./bananas2/bananas2.js', (err) => {
//     err ? console.log(err) : console.log('bananas deleted');
// });
//
// fs.rmdir('bananas2', (err)=> {
//     if (err) console.log(err);
//     else {
//         console.log('folder deleted')
//     }
// })


// MAKE FOLDER WITH FILE INSIDE
// fs.mkdir('bananas2',(err) => {
//     if(err)
//         console.log(err)
//     else {
//         fs.writeFile('./bananas2/bananas2.js', `Bananas are friends`,(err) => {
//             if(err)
//                 console.log('err')
//             else {
//                 console.log('File inside the folder is created')
//             }
//         })
//     }
// });


// MAKE FOLDER
// const fs = require('fs');
// fs.mkdir('tutorial',(err) => {
//     if(err)
//         console.log(err)
//     else {
//         console.log('folder created');
//     }
// });

// DELETE FOLDER
// fs.rmdir('tutorial',(err) => {
//     if(err)
//         console.log(err)
//     else {
//         console.log('folder created');
//     }
// });
//


///Working with folders
// Working with files
/// Deleting the file
// const fs = require('fs');
// fs.unlink('bananas.txt',(err) =>{
//     if(err)
//         console.log(err);
//     else console.log('hopefully its deleted')
// });



/// changing content of the file
// const fs = require('fs');
// fs.appendFile('bananas.txt', `console.log('hola alena')`, (err) => {
//     if(err)
//         console.log(err);
//     else console.log('data has changed');
// })


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