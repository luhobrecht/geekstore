
module.exports = (sequelize, dataTypes)=>{
    let alias ="Products";
    let cols= {

        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.VARCHAR(50)

        },
        price:{
            type:dataTypes.FLOAT
        },
        description:{
            type: dataTypes.TEXT
        },
        category:{
            type:dataTypes.VARCHAR(50)
        },
        colors: {
            type:dataTypes.VARCHAR(50)
        },
        syze: {
            type:dataTypes.VARCHAR(50)
        },
        img: {
            type:dataTypes.VARCHAR(50)
        },
        discount:{type:dataTypes.INTEGER},
        type:{
            type:dataTypes.VARCHAR(50)
        }

    };

    let config ={
        tableName: "products",
        timestamps: false
    }




    const Product= sequelize.define(alias,cols,config);
    return Product;



}
