const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist');

router.get('/', async (req, res) => {
    try {
        let checklist = await Checklist.find({});
        // res.status(200).json(checklist);
        res.status(200).render('checklists/index', { checklist: checklist})
    } catch (error) {
        res.status(500).render('pages/error', { error: 'Erro ao exibir as Listas'})
    }

})

router.post('/', async (req, res) => {
    let { name } = req.body // pega o name do json e coloca na variavel name

    try {
        let checklist = await Checklist.create({ name })
        res.status(200).json(checklist);
    } catch (error) {
        res.status(400).json(error)
    }
    // console.log(req.body["name"]);

})

router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).render('checklists/show', { checklist: checklist})
    } catch (error) {
        res.status(500).render('pages/error', { error: 'Erro ao exibir as Listas'})
    }
})

router.put('/:id', async (req, res) => {
    let { name } = req.body

    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name }, { new: true });
        res.status(200).json(checklist);
    } catch (error) {
        res.status(500).json(error)
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