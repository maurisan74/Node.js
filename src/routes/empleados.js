const { Router } = require('express');
const router = Router();

const empleados = require('../FilesJson/Empleados.json');
router.get('/', (req, res) => {
    res.json(empleados);
});

module.exports = router;