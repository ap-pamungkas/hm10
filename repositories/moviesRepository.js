const models = require('../models');
const { where } = require('sequelize');

const Movies = models.movies;


const moviesRepository = {
    getAllMovies : async function (){
        return await Movies.findAll(
            
        );
    },
 
    getMoviesById: async function(id){
        return await Movies.findByPk(id);
    },
    
    createMovies: async function(movie){
        return await Movies.create(movie);
    },
    updateMovies: async function ( id, movies){
        return await Movies.update(movies, {where:{id:id}});
    },

    deleteMovies: async function (id){
        return await Movies.destroy({where:{id:id}})
    }

}

module.exports = moviesRepository;