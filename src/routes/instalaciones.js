const { Router } = require('express');
const router = Router();

const instalaciones = require('../FilesJson/Instalaciones.json');
router.get('/', (req, res) => {
    res.json(instalaciones);
});


module.exports = router;