const express = require('express');
const router = express.Router();
const ctrlCharities = require('../controllers/charities');

router.get('/', ctrlCharities.getAllCharities);
router.get('/:id', ctrlCharities.getCharityById);
router.post('/', ctrlCharities.createCharity);
router.put('/:id', ctrlCharities.updateCharity);
router.delete('/:id', ctrlCharities.deleteCharityById);

module.exports = router;
