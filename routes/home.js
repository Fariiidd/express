let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.send('Bienvenido a home');
});

module.exports = router;