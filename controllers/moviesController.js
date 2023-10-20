const repository = require('../repositories/moviesRepository');



const moviesController = {
   getAllmovies: async function(req, res){
      try{
        const movies = await repository.getAllMovies();
      
        res.status(200).json({data:movies,
                              massage:'get movies success'})

      }catch{
        res.status(500).json('get data movies fail');
      }
   },

   getMoviesById: async function(req,res){
    const id = req.params.id;
    try {
      const movies = await repository.getMoviesById(id);
      if(!movies) return res.status(404).json({massage:'not found'});
     
        res.status(200).json({data:movies,
        massage:'get data by id success'})
      
      
    } catch (error) {
      res.status(500).json('get data by id fail');
    }
   },

   createMovies: async function(req, res){
  
    const movie = req.body;
    try {
      const newMovies = await repository.createMovies(movie);
      res.status(201).json({data:newMovies, massage:'create new data movies '});
      
    } catch (error) {
      res.status(500).json({massage:'create new data movie fail'})
      
    }
   },


   updateMovies : async function(req, res){
    const id = req.params.id;
    const updateMovies = req.body;
    try {
      await repository.updateMovies(id, updateMovies);
      res.status(200).json({massage:'update  movies success'})
      
    } catch (error) {
      res.status(500).json({massage:'update data movie fail'})
    }

   },


   deleteMovies : async function(req, res){
      const id = req.params.id;
      try{
        const deleteMovies = await  repository.deleteMovies(id);

        if(deleteMovies === 0){
         return  res.status(400).json({massage:'data not found'});
        }
        res.status(204).end();
      }catch{

      }
   },
   uploadMovieImage: async function (req, res) {   
    const file = req.file.path;
    try {
      if (!file) {
        return res.status(400).send({ staus:false,
           message: 'no file is selected'});
      }
      const imageUrl = `/upload/${req.file.filename}`;
      const {id, title, genres, years, photo} = req.body; 
      const movie = await repository .createMovies(id, title, years,genres, photo );
      if (!movie) {
        return res.status(404).json({ message: 'Film not found' });
      }
      movie.imageURL = imageUrl;
      await movie.save(); 
      res.json({ message: 'upload image succes' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'download image fail' });
    }
  },
};

module.exports =  moviesController ;