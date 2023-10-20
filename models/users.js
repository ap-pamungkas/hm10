const {Model}= require('sequelize');


module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        email:DataTypes.STRING,
        gender:DataTypes.STRING,
        password:DataTypes.STRING,
        role:DataTypes.STRING
        
    
    

    
        
    },{
        tableName:'users',
        timestamps: false
        
    });

    return User
};

