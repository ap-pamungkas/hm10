const { where } = require('sequelize');
const models = require('../models');
const Users = models.users;

const usersRepository = {
    getAllUser : async function (){
        return await Users.findAll();

    },

    getUsersById : async function(id){

        return await Users.findByPk(id);
    },
    createUsers: async function(user){
        return await Users.create(user);

    },

    updateUsers: async function(id, users){
        return await Users.update(users,{ where:{id:id}});
    
    },

    deleteUsers:async function(id){
        return await Users.destroy({where:{id:id}});
    }

};



module.exports = usersRepository;