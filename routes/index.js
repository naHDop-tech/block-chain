var express = require('express');
var router = express.Router();
const { CryptoBlock, Blockchain } = require('../models/Blockchain')

const bc = new Blockchain()
/* GET home page. */
router.get('/', function(req, res, next) {
  bc.addNewBlock(new CryptoBlock(1, "01/06/2020", {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50
  }))
  bc.addNewBlock(new CryptoBlock(2, "01/07/2020", {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100
  }))
  res.status(200).json({
    chain: bc
  })
});

module.exports = router;
