module.exports = (sequelize, DataTypes) => {
    let alias = "Products";
    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
        },
        price:{
            type:DataTypes.FLOAT,
        },
        description:{
            type: DataTypes.TEXT,
        },
        category:{
            type:DataTypes.STRING,
        },
        colors: {
            type:DataTypes.STRING,
        },
        syze: {
            type:DataTypes.STRING,
        },
        img: {
            type:DataTypes.STRING,
        },
        discount: {
            type:DataTypes.INTEGER,
        },
        type: {
            type:DataTypes.STRING,
        }
    };

    let config = {
        tableName: "products",
        timestamps: false
    }




    const Product = sequelize.define(alias,cols,config);
    return Product;



}
