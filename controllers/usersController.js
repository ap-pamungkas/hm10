const repository = require("../repositories/usersRepository");
const userController = {
  getAllUsers: async function (req, res) {
    try {
      const users = await repository.getAllUser();
      res.status(200).json({
        data: users,
        massage: "get data success",
      });
    } catch (error) {
      res.status(500).json({ massage: "get data fail" });
    }
  },
  getUsersById: async function (req, res) {
    const id = req.params.id;
    try {
      const users = await repository.getUsersById(id);
      if (users) {
        res
          .status(200)
          .json({ data: users, massage: "get data by id success" });
      } else {
        res.status(404).json({ massage: "not found" });
      }
    } catch (error) {
      res.status(500).json({ massage: "get data by id fail" });
    }
  },

  createUsers: async function (req, res) {
    const user = req.body;
    try {
      const newUsers = await repository.createUsers(user);
      res.status(201).json({
        data: newUsers,
        massage: "crate new data user success ",
      });
    } catch (error) {
      res.status(500).json({ massage: "create new data user fail" });
    }
  },

  updateUsers:async function(req, res){
    const id= req.params.id;
    const updateUsers = req.body;
    try{
       await repository.updateUsers(id, updateUsers);
      res.status(200).json({
       
        massage:'update user succes'})

    }catch(error){
      res.status(500).json({massage:'update user fail'})
    }
  },
 
  deleteUsers: async function(req, res){
    const id = req.params.id;
   
    try{
     const deleteUsers= await repository.deleteUsers(id);
     if (deleteUsers===0) {
      return res.status(404).json({ message: 'data not found' });
    }
    res.status(204).end();


    }catch(error){
      res.status(500).json({massage:'delete data user fail'});
    }
  }
};

module.exports = {
  userController,
};
