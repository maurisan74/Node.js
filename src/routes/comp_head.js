const { Router } = require('express');
const router = Router();


const comp_head=require('../FilesJson/comp_head.json');
router.get('/', (req, res) => {
    res.json(comp_head);});


module.exports = router;