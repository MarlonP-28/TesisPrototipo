// autenticacion en la aplicacion
const express = require('express');
const router = express.Router();

router.get('/signin', (req, res) =>{
    res.send('Ingresando a la aplicación');
});

router.get('/signup', (req, res) =>{
    res.send('Formulario de authenticacion');
});

module.exports = router;