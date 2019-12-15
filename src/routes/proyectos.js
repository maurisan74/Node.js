const { Router } = require('express');
const router = Router();


const proyectos = require('../FilesJson/Proyectos.json');
router.get('/', (req, res) => {
    res.json(proyectos);
});


module.exports = router;