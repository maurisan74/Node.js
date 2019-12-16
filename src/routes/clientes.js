const { Router } = require('express');
const router = Router();


const clientes=require('../FilesJson/Clientes.json');
router.get('/', (req, res) => {
    res.json(clientes);});


module.exports = router;