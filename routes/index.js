var express = require('express');
var router = express.Router();
const { CryptoBlock, Blockchain } = require('../models/Blockchain')

const bc = new Blockchain()
/* GET home page. */
router.get('/mine-block', function(req, res, next) {
  const block = new CryptoBlock(
    bc.blockchain.length,
    new Date().toLocaleDateString(),
    {
      title: "Option negative",
      count: 45
    }
  )
  bc.addNewBlock(block)
  res.status(200).json({
    message: 'Block was added',
    data: block
  })
});

router.get('/chain', function(req, res, next) {
  res.status(200).json({
    message: 'Success',
    data: bc.blockchain
  })
});

router.get('/is-chain-valid', function(req, res, next) {
  res.status(200).json({
    message: 'Success',
    data: bc.checkChainValidity()
  })
});

module.exports = router;
