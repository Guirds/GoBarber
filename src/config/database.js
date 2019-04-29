module.exports = {
  dialect: 'postgress', // definir qual banco de dados será usado
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'gobarber',
  operatorAliases: false, // Vai passar mais algumas config para o sequelize se comportar devidamente
  define: {
    timestamps: true, // Vai adicionar duas colunas em toda a base de dados, chamadas: createdAt e updatedAt
    underscored: true, // os nomes da tabela vão ser salvos com separamento em snack case -
    underscoredAll: true // para aplicar no snack case nas no nome das tabelas tbm
  }
}
