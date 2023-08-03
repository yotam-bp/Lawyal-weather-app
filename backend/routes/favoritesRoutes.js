const express = require('express');
const favoriteControler = require('../controllers/favoriteController');
const router = express.Router({ mergeParams: true });

router.route('/').get(favoriteControler.getFavoriteLocations)
router.route('/:id').patch(favoriteControler.updateFavorite)

module.exports = router;
