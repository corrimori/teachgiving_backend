const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/pledges');

// get pledges for a kid
router.get('/', ctrl.getPledges);
// router.get('/:kid_id', ctrl.getPledgesForKid);

// when kid gives to a specific charity
// router.post('/', ctrl.createPledge);
// router.put('/:id', ctrl.updatePledge);
// router.delete('/:id', ctrl.deletePledge);

module.exports = router;

//======================================
//requesting to create new pledges with provided array of items from the front end
