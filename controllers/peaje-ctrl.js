const Peaje = require('../models/peaje-model')

createPeaje = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const peaje= new Peaje(body)

    if (!peaje) {
        return res.status(400).json({ success: false, error: err })
    }

    peaje
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: peaje._id,
                message: 'Peaje created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Peaje not created!',
            })
        })
}

updatePeaje = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Peaje.findOne({ _id: req.params.id }, (err, peaje) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Peaje not found!',
            })
        }

        peaje.identificador = body.identificador
        peaje.peaje = body.peaje
        peaje.consorcio = body.consorcio
        peaje.fecha = body.fecha
        peaje.encargado = body.encargado
        peaje.ciudad = body.ciudad
        peaje.latitud = body.latitud
        peaje.longitud = body.longitud
        peaje.ValorCatOne = body.ValorCatOne
        peaje.ValorCatTwo = body.ValorCatTwo
        peaje.ValorCatThree = body.ValorCatThree
        peaje.ValorCatFour = body.ValorCatFour



               
        peaje
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: peaje._id,
                    message: 'Peaje updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
}

updatePeajeId = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Peaje.findOne({ identificador: req.params.identificador }, (err, peaje) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Peaje not found!',
            })
        }

        peaje.identificador = body.identificador
        peaje.peaje = body.peaje
        peaje.consorcio = body.consorcio
        peaje.fecha = body.fecha
        peaje.encargado = body.encargado
        peaje.ciudad = body.ciudad
        peaje.latitud = body.latitud
        peaje.longitud = body.longitud
        peaje.ValorCatOne = body.ValorCatOne
        peaje.ValorCatTwo = body.ValorCatTwo
        peaje.ValorCatThree = body.ValorCatThree
        peaje.ValorCatFour = body.ValorCatFour
               
        peaje
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: peaje._id,
                    message: 'Peaje updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
}


deletePeaje = async (req, res) => {
    await Peaje.findOneAndDelete({ _id: req.params.id }, (err, peaje) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!peaje) {
            return res
                .status(404)
                .json({ success: false, error: `Peaje not found` })
        }

        return res.status(200).json({ success: true, data: peaje })
    }).catch(err => console.log(err))
}

deletePeajeId = async (req, res) => {
    await Peaje.findOneAndDelete({ identificador: req.params.identificador }, (err, peaje) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!peaje) {
            return res
                .status(404)
                .json({ success: false, error: `Peaje not found` })
        }

        return res.status(200).json({ success: true, data: peaje })
    }).catch(err => console.log(err))
}



 getPeajeById = async (req, res) => {
     await Peaje.findOne({ _id: req.params.id }, (err, peaje) => {
         if (err) {
             return res.status(400).json({ success: false, error: err })
        }

         return res.status(200).json({ success: true, data: peaje })
     }).catch(err => console.log(err))
 }

 getPeajeByIden = async (req, res) => {
    await Peaje.findOne({ identificador: req.params.identificador }, (err, peaje) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
       }

        return res.status(200).json({ success: true, data: peaje })
    }).catch(err => console.log(err))
}



getPeajes = async (req, res) => {
    await Peaje.find({}, (err, peajes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!peajes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Peaje not found` })
        }
        return res.status(200).json({ success: true, data: peajes })
    }).catch(err => console.log(err))
}

module.exports = {
    createPeaje,
    updatePeaje,
    updatePeajeId,     
    deletePeaje,  
    deletePeajeId,  
    getPeajes,
    getPeajeById,
    getPeajeByIden,
    
}
