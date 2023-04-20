const express = require('express')
const alunosController = require('./controllers/alunosControllers')

const router = express.Router()

router.get('/alunos', alunosController.findAll)
router.get('/aluno/:ra', alunosController.findOne)
router.post('/alunos', alunosController.addAluno)
router.patch('/aluno/:ra', alunosController.alterAluno)
router.delete('/aluno/:ra', alunosController.delAluno)

module.exports = router