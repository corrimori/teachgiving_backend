const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users');

router.get('/', ctrl.getAllUsers);
router.get('/:id', ctrl.getUserById);
router.get('/:id/kids', ctrl.fetchKidsForUser);
router.post('/', ctrl.createUser);
router.put('/:id', ctrl.updateUser);
router.delete('/:id', ctrl.deleteUserById);

module.exports = router;
