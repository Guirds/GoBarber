const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

const UserController = require('./app/controller/UserController')
const SessionController = require('./app/controller/SessionController')
const DashboardController = require('./app/controller/DashboardController')
const FileController = require('./app/controller/FileController')
const AppointmentController = require('./app/controller/AppointmentController')
const AvailableController = require('./app/controller/AvailableController')

routes.use((req, res, next) => {
  res.locals.flashSucces = req.flash('success')
  res.locals.flashError = req.flash('error')

  return next()
})

routes.get('/files/:file', FileController.show)

routes.get('/', guestMiddleware, SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', guestMiddleware, UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.use('/app', authMiddleware)

routes.get('/app/logout', SessionController.destroy)

routes.get('/app/dashboard', DashboardController.index)

routes.get('/app/appointment/new/:provider', AppointmentController.create)
routes.get('/app/available/:provider', AvailableController.index)

module.exports = routes
