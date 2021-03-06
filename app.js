// validate input with joi
const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();
app.use('/public', express.static(path.join(__dirname, 'static')));
//we are parsing the data and attaching it to the form body
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'hello.html'));
});
app.post('/', (req, res)=> {
    console.log(req.body);
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body,schema, (err, result)=>{
        if(err) {
            console.log(result)
            res.send ('en error has occured')
        }
        console.log(result);
        res.send('success');
    })
    //database work here
    res.send('submitted');
});
app.listen(3000);

// // POST request with Body Parser
//
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const app = express();
// app.use('/public', express.static(path.join(__dirname, 'static')));
// //we are parsing the data and attaching it to the form body
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static', 'hello.html'));
// });
// app.post('/', (req, res)=> {
//     console.log(req.body);
//     //database work here
//     res.send('submitted');
// });
// app.listen(3000);

// Serving static files with Express
//
// const express = require('express');
// const path = require('path');
// const app = express();
// app.use('/public', express.static(path.join(__dirname, 'static')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static', 'hello.html'));
// });
//
// app.listen(3000);

// // GET / GET with params / GET With query
// const express = require('express');
// const app = express();
//
// app.get('/', (req, res) => {
//     res.send('Hello from home');
// });
// app.get('/example',(req,res)=> {
//     res.send('hitting example route');
// })
//
// app.get('/example/:name/:age',(req,res) => {
//     console.log(req.params);
//     console.log(req.query);
//     //http://localhost:3000/example/pedro/22?alena=paramstutorial&sort=byage
//     res.send(req.params.name + " : " + req.params.age);
// })
//
// app.listen(3000);


// npm packages
// Loadash
// const _ = require('lodash');
// let example = _.fill([1,2,3,4,5,6], "banana",1,4);
// console.log(example);
// send files to server json
// const http = require('http');
// const fs = require('fs');
// http.createServer((req,res) => {
//     const readStream = fs.createReadStream('./static/example.json');
//     res.writeHead(200,{'Content-type': 'application/json'});
//     readStream.pipe(res);
// }).listen('3000');



// // creating a http module
// const http = require('http');
// const server = http.createServer((req, res)=> {
//  if (req.url === '/') {
//      res.write('Hello from Node');
//      res.end();
//  }
//  else {
//      res.write('using some other domain');
//      res.end();
//  }
// });
//
// server.listen('3000');




// Pipe & Compress & Uncompress files
// const fs = require('fs');
// // module for compression files
// const zlib = require('zlib');
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example2.txt.gz');
// const writeStream = fs.createWriteStream('banana.txt');
// readStream.pipe(gunzip).pipe(writeStream);

//Create a file with chunk data in it
// const fs = require('fs');
//
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example2.txt', 'utf8');
// readStream.on('data',(chunk) => {
//     writeStream.write(chunk)
// })
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