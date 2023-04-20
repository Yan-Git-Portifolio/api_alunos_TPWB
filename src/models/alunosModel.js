const connection = require('./connection')

const findAll = async () => {
  const [alunos] = await connection.execute("SELECT * FROM alunos")
  return alunos
}

const findOne = async (ra) => {
  const [alunos] = await connection.execute(`SELECT * FROM alunos WHERE ra = '${ra}'`)
  return alunos
}

const addAluno = async (aluno) => {
  const { nome, ra, data_de_nascimento } = aluno

  const [addedAluno] = await connection.execute(`INSERT INTO alunos (nome, RA, data_de_nascimento) VALUES ('${nome}', '${ra}', '${data_de_nascimento}');`)
  return addedAluno
}

const alterAluno = async (aluno, ra) => {
  const { nome, data_de_nascimento } = aluno

  const [addedAluno] = await connection.execute(`UPDATE alunos SET nome = '${nome}', data_de_nascimento = '${data_de_nascimento}' WHERE ra = '${ra}';`)
  return addedAluno
}

const delAluno = async (ra) => {

  const [addedAluno] = await connection.execute(`DELETE FROM alunos WHERE ra = '${ra}';`)
  return addedAluno
}


module.exports = {
  findAll,
  findOne,
  addAluno,
  alterAluno,
  delAluno
}