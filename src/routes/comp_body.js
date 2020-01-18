const { Router } = require('express');
const router = Router();


const comp_body = require('../FilesJson/comp_body.json');
router.get('/', (req, res) => {
    res.json(comp_body);
});


module.exports = router;