module.exports = (sequelize, DataTypes)=>{
    let alias = "Users";
    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,

        },
        user:{
            type:DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        city: {
            type:DataTypes.STRING,
        },
        password: {
            type:DataTypes.STRING,
        },
        img: {
            type:DataTypes.STRING,
        },
    };

    let config ={
        tableName: "users",
        timestamps: false
    }




    const User = sequelize.define(alias,cols,config);
    return User;



}