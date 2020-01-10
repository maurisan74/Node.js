const { Router } = require('express');
const router = Router();


const equipos = require('../FilesJson/equipos.json');
router.get('/', (req, res) => {
    res.json(equipos);
});
module.exports = router;