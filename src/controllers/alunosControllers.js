const alunosModel = require('../models/alunosModel')

const findAll = async (req, res) => {
  const alunos = await alunosModel.findAll()

  return res.status(200).json(alunos)
}

const findOne = async (req, res) => {
  const aluno = await alunosModel.findOne(req.params.ra)

  return res.status(200).json(aluno)
}

const addAluno = async (req, res) => {
  const addedAluno = await alunosModel.addAluno(req.body)
  return res.status(201).json({ status: "Aluno inserido com Sucesso!" })
}

const alterAluno = async (req, res) => {
  const alteredAluno = await alunosModel.alterAluno(req.body, req.params.ra)
  return res.status(201).json({ status: "Aluno alterado com Sucesso!" })
}

const delAluno = async (req, res) => {
  const alteredAluno = await alunosModel.delAluno(req.params.ra)
  return res.status(201).json({ status: "Aluno excluído com Sucesso!" })
}


module.exports = {
  findAll,
  findOne,
  addAluno,
  alterAluno,
  delAluno
}