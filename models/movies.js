const {Model} = require('sequelize');


module.exports = (sequalize, DataTypes) =>{
    const Movie = sequalize.define('Movie', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:DataTypes.STRING,
        genres:DataTypes.STRING,
        year:DataTypes.STRING,
        photo:DataTypes.CHAR
    },{
        tableName:'movies',
        timestamps: false
    });
    return Movie
};



