const router = require('express').Router();
const path = require('path');

// This is the 'get' route 
router.get('/', async (req, res) => {
  // renders HTML
    res.sendFile(path.join(__dirname, './views/index.html'));
});

module.exports = router;