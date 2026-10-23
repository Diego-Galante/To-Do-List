const express = require('express');
const checkListRouter = require("./src/routes/ckecklist")
require('./config/database');

const app = express();
app.use(express.json());

app.use('/checklists',checkListRouter);

app.listen(3000, () => {
    console.log("Servidor foi iniciado");
})

// const log = (req, res, next) => {
//     console.log(req.body);
//     console.log(`Data: ${Date.now()}`);
//     next();
    
// }

// app.use(log);

// app.get('/', (req, res) => {
//     res.send('<h1>Minha Lista de Tarefas</h1>');
// })

// app.get('/json', (req, res) => {
//     console.log(req.body);
//     res.json({title: "Tarefa X", done: true})
// })


