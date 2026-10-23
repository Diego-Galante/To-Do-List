const express = require('express');
const checkListRouter = require("./src/routes/ckecklist")
const rootRouter = require("./src/routes/index")

require('./config/database');
const path = require('path')

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs')

app.use('/checklists',checkListRouter);
app.use('/',rootRouter);

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


