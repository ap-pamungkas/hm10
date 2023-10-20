const express = require('express');
const moviesController = require('../controllers/moviesController');
const upload = require('../middleware/upload')
const router = express.Router();
const path = require('path')
const uploadDir = path.join(__dirname, '../upload');




router.get('/movies', moviesController.getAllmovies );
router.get('/movies/:id', moviesController.getMoviesById);
router.post('/movies', moviesController.createMovies);
router.put('/movies/:id', moviesController.updateMovies);
router.delete('/movies/:id', moviesController.deleteMovies);
router.put('/movies/upload', upload.single('photo'), moviesController.uploadMovieImage);

router.use('/movies/upload',express.static( uploadDir));

module.exports = router;