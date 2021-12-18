const Consorcio = require('../models/consorcio-model')

createConsorcio = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a consorcio',
        })
    }

    const consorcio = new Consorcio(body)

    if (!consorcio) {
        return res.status(400).json({ success: false, error: err })
    }

    consorcio
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: consorcio._id,
                message: 'Consorcio created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Consorcio not created!',
            })
        })
}

updateConsorcio = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Consorcio.findOne({ _id: req.params.id }, (err, consorcio) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Consorcio not found!',
            })
        }

        consorcio.identificador = body.identificador
        consorcio.nombre = body.nombre
        consorcio.fecha = body.fecha
        consorcio.administrador = body.administrador
        consorcio.departamento = body.departamento
        consorcio.ciudad = body.ciudad
        consorcio.descripcion = body.descripcion

        
        consorcio
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: consorcio._id,
                    message: 'Consorcio updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Consorcio not updated!',
                })
            })
    })
}

updateConsorcioId = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Consorcio.findOne({ identificador: req.params.identificador }, (err, consorcio) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Consorcio not found!',
            })
        }

        consorcio.identificador = body.identificador
        consorcio.nombre = body.nombre
        consorcio.fecha = body.fecha
        consorcio.administrador = body.administrador
        consorcio.departamento = body.departamento
        consorcio.ciudad = body.ciudad
        consorcio.descripcion = body.descripcion
        
        consorcio
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    identificador: consorcio.identificador,
                    message: 'Consorcio updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Consorcio not updated!',
                })
            })
    })
}

deleteConsorcio = async (req, res) => {
    await Consorcio.findOneAndDelete({ _id: req.params.id }, (err, consorcio) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!consorcio) {
            return res
                .status(404)
                .json({ success: false, error: `Consorcio not found` })
        }

        return res.status(200).json({ success: true, data: consorcio })
    }).catch(err => console.log(err))
}

deleteConsorcioId = async (req, res) => {
    await Consorcio.findOneAndDelete({ identificador: req.params.identificador }, (err, consorcio) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!consorcio) {
            return res
                .status(404)
                .json({ success: false, error: `Consorcio not found` })
        }

        return res.status(200).json({ success: true, data: consorcio })
    }).catch(err => console.log(err))
}

 getConsorcioById = async (req, res) => {
     await Consorcio.findOne({ _id: req.params.id }, (err, consorcio) => {
         if (err) {
             return res.status(400).json({ success: false, error: err })
        }

         return res.status(200).json({ success: true, data: consorcio })
     }).catch(err => console.log(err))
 }

getConsorcioByIden = async (req, res) => {
    await Consorcio.findOne({ identificador: req.params.identificador }, (err, consorcio) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: consorcio })
    }).catch(err => console.log(err))
}

getConsorcios = async (req, res) => {
    await Consorcio.find({}, (err, consorcios) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!consorcios.length) {
            return res
                .status(404)
                .json({ success: false, error: `Consorcios not found` })
        }
        return res.status(200).json({ success: true, data: consorcios })
    }).catch(err => console.log(err))
}

module.exports = {
    createConsorcio,
    updateConsorcio,
    updateConsorcioId,
    deleteConsorcio,
    deleteConsorcioId,
    getConsorcios,
    getConsorcioById,
    getConsorcioByIden,
}
