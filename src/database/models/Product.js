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
        img: {
            type:DataTypes.STRING,
        },
        discount: {
            type:DataTypes.INTEGER,
        },
    };

    let config = {
        tableName: "products",
        timestamps: false
    }




    const Product = sequelize.define(alias,cols,config);
    return Product;



}
