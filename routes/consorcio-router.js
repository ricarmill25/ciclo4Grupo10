const express = require('express')

const ConsorcioCtrl = require('../controllers/consorcio-ctrl')

const router = express.Router()

router.post('/consorcio', ConsorcioCtrl.createConsorcio)
router.put('/consorcio/:id', ConsorcioCtrl.updateConsorcio)
router.put('/consorcio_id/:identificador', ConsorcioCtrl.updateConsorcioId)
router.delete('/consorcio/:id', ConsorcioCtrl.deleteConsorcio)
router.delete('/consorcio_id/:identificador', ConsorcioCtrl.deleteConsorcioId)
router.get('/consorcio/:id', ConsorcioCtrl.getConsorcioById)
router.get('/consorcio_id/:identificador', ConsorcioCtrl.getConsorcioByIden)
router.get('/consorcios', ConsorcioCtrl.getConsorcios)

module.exports = router
