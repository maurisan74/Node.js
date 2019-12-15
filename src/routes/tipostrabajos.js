const { Router } = require('express');
const router = Router();

const tiposTrabajos = require('../FilesJson/TiposTrabajos.json');
router.get('/', (req, res) => {
    res.json(tiposTrabajos);
});



module.exports = router;