const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.put('/usuario/:cedula', UserCtrl.updateUserCedula)
router.delete('/user/:id', UserCtrl.deleteUser)
router.delete('/usuario/:cedula', UserCtrl.deleteUserCedula)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/usuario/:cedula', UserCtrl.getUserByCedula)
router.get('/users', UserCtrl.getUsers)

module.exports = router
