const express = require('express')

const PeajeCtrl = require('../controllers/peaje-ctrl')

const router = express.Router()

router.post('/peaje', PeajeCtrl.createPeaje)
router.put('/peaje/:id', PeajeCtrl.updatePeaje)
router.put('/peaje_id/:identificador', PeajeCtrl.updatePeajeId)
router.delete('/peaje/:id', PeajeCtrl.deletePeaje)
router.delete('/peaje_id/:identificador', PeajeCtrl.deletePeajeId)
router.get('/peaje/:id', PeajeCtrl.getPeajeById)
router.get('/peaje_id/:identificador', PeajeCtrl.getPeajeByIden)
router.get('/peajes', PeajeCtrl.getPeajes)

module.exports = router
