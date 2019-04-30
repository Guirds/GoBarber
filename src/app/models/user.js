module.exports = (sequelize, DataTypes) => {
  // sequelize faz a comunicação com o banco de dados e
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN
  })

  return User
}
