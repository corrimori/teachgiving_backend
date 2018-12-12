const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/kids');

router.get('/', ctrl.getAllKids);
router.get('/:id', ctrl.getKidById);
router.get('/:id/pledges', ctrl.getPledgesForKid);
router.post('/', ctrl.createKid);
router.put('/:id', ctrl.updateKid);
router.delete('/:id', ctrl.deleteKidById);

module.exports = router;
