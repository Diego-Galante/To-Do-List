const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist');

router.get('/', async (req, res) => {
    try {
        let checklist = await Checklist.find({});
        // res.status(200).json(checklist);
        res.status(200).render('checklists/index', { checklist: checklist })
    } catch (error) {
        res.status(500).render('pages/error', { error: 'Erro ao exibir as Listas' })
    }

})

router.get('/new', async (req, res) => {
    try {
        let checklist = await new Checklist();
        res.status(200).render('checklists/new', { checklist })
    } catch (error) {
        res.status(500).render('pages/error', { error: 'Erro ao carregar o formulário' })
    }
})

router.get('/:id/edit', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).render('checklists/edit', { checklist: checklist })
    } catch (error) {
        res.status(500).render('pages/error', { error: 'Erro ao carregar a edição de Lista de Tarefas' })
    }
})

router.post('/', async (req, res) => {
    let { name } = req.body.checklist

    try {
        let checklist = await Checklist.create({ name })
        res.status(200).render('checklists/new', { checklist: checklist });
    } catch (error) {
        res.status(400).render('pages/error', { error: 'Erro a criação de Listas' })
    }
    // console.log(req.body["name"]);

})

router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).render('checklists/show', { checklist: checklist })
    } catch (error) {
        res.status(500).render('pages/error', { error: 'Erro ao exibir as Listas' })
    }
})

router.put('/:id', async (req, res) => {
    let { name } = req.body.checklist
    let checklist = await Checklist.findById(req.params.id); 

    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name });
        res.redirect('/checklists')
    } catch (error) {
        let errors = error.erros
        res.status(500).render('checklists/edit', {checklist: {...checklist, errors}})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndDelete(req.params.id);
        res.status(200).json(checklist);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;