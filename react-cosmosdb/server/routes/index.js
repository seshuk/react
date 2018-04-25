var express = require('express');
var router = express.Router();

router.get('/heroes', function(req, res, next) {
  
  const heroes = [
    {
      id: 0,
      name: 'Captain America',
      saying: 'This is Captain Speaking'
    }
  ];
  
  
  
  res.json(heroes);
});

module.exports = router;
