const express = require("express");
const router = express.Router()

module.exports = router


router.post('/ex1', function (req, res) {
   
    const {nome, horastrabalhadas, valorhora, filhos} = req.body

    const salariobruto = horastrabalhadas * valorhora
    const bonificacaofilhos = 0.03 * salariobruto * filhos
    const salariofinal = salariobruto + bonificacaofilhos

    res.json({salariobruto, bonificacaofilhos, salariofinal})




res.json({ Resposta: 'Lista 2 --> Ex 1' })
})