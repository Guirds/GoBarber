const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  // sequelize faz a comunicação com o banco de dados e
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      password: DataTypes.VIRTUAL, // existe somente na aplicação e não no bd
      password_hash: DataTypes.STRING,
      provider: DataTypes.BOOLEAN
    },
    {
      hooks: {
        beforeSave: async User => {
          if (User.password) {
            User.password_hash = await bcrypt.hash(User.password, 8) // numero representa a quantidade de rounds que o bcrypt vai rodar deve ficar entre 8 e 10
          }
        }
      }
    }
  )

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  return User
}
