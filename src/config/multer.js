const path = require('path')
const crypto = require('crypto')
const multer = require('multer')

module.exports = {
  // diskStorage define que as img vão ser salvas em disco(no projeto)
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, raw) => {
        if (err) return cb(err)

        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}
