module.exports = (sequelize, dataTypes)=>{
    let alias ="Users";
    let cols= {

        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.VARCHAR(50)

        },
        user:{
            type:dataTypes.VARCHAR(50)
        },
        email:{
            type: dataTypes.VARCHAR(50)
        },
        province:{
            type:dataTypes.VARCHAR(50)
        },
        city: {
            type:dataTypes.VARCHAR(50)
        },
        interests: {
            type:dataTypes.LONGTEXT
        },
        password: {
            type:dataTypes.VARCHAR(50)
        },
        img:{type:dataTypes.VARCHAR(50)},
        adress:{
            type:dataTypes.VARCHAR(50)
        }

    };

    let config ={
        tableName: "users",
        timestamps: false
    }




    const User= sequelize.define(alias,cols,config);
    return User;



}