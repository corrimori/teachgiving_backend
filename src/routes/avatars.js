const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/avatars');

router.get('/', ctrl.getAllAvatars);
router.get('/:id', ctrl.getAvatarById);

module.exports = router;
