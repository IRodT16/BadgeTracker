const express = require('express');
const router = express.Router();

const {
  getAllBadges,
  createBadge,
  deleteBadge,
} = require('../controllers/badges');

router.route('/').get(getAllBadges).post(createBadge);
router.route('/:id').delete(deleteBadge);

module.exports = router;
