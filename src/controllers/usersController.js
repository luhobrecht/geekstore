const fs= require("fs");
const path = require ("path");
const bcrypt = require ("bcryptjs");
const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json")))
const { validationResult } = require("express-validator");
const db = require ("../database/models")


/*function writeFile(array){
    let string = JSON.stringify(array, null, 8);
    fs.writeFileSync(path.join(__dirname, "../data/users.json"), string);
}
*/
const usersController = {
    index: (req,res) => {
        db.Users.findAll()
        .then(function(users) {
            return res.render("users", {users: users})
        })

        /*
        res.render("users", {users: users})
        */
    },
    
    detail: (req, res) => {

        db.Users.findByPk(req.params.id)
        .then(function(user) {
            return res.render("userDetail", {user: user})
        })
       /* let userFound = users.find(function(user){
           return user.id == req.params.id
        });

        res.render("userDetail", {user: userFound});
        */
    },
    login:(req, res) => {
        res.render("login");
    },
    processLogin: function(req, res){
        const errors = validationResult(req);   
        if(errors.errors.length > 0){
            res.render("login", {errorsLogin: errors.mapped(), old: req.body})
        }
            const userFound = users.find(function(user){
                return user.user == req.body.user && bcrypt.compareSync(req.body.password, user.password)
            })
    
            if(userFound){
                //proceso session
                req.session.userLogueado = userFound;
    
                if(req.body.remember){
                    res.cookie("user", userFound.id, {maxAge: 60000 * 24})
                }
    
                res.redirect("/")
    
            }else{
                res.render("login", {errorMsg: "Error! Credenciales inválidas"})
            }
        }, 
    logout:function(req, res){
        req.session.destroy();       
        res.clearCookie("user");
        res.redirect("/");
    },
    create: (req, res) => {
        res.render("register");
    },
    save: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Users.create({
                name: req.body.name,
                user: req.body.user,
                email: req.body.email,
                city: req.body.city,
                img: req.file ? req.file.filename: "default.png",
                password: bcrypt.hashSync(req.body.password, 15),
            });


        res.redirect("/usuarios/login");
        /*let newUser= {
            id: users.length + 1,
            name: req.body.name,
            user: req.body.user,
            email: req.body.email,
            birthDate: req.body.birthDate,
            adress: req.body.adress,
            city: req.body.city,
            provincia: req.body.provincia,
            img: req.file ? req.file.filename: "default.png",
            password: bcrypt.hashSync(req.body.password, 10),
            passwordConfirm: bcrypt.hashSync(req.body.password_confirm, 10),
            interest: req.body.interest
            }
    
            users.push(newUser);
            
            writeFile(users);
    
            res.redirect("/usuarios/login");
        */
        }else{
            res.render("register", {errors: errors.mapped(), old: req.body});
        }
    },
    edit: (req,res) => {

        db.Users.findByPk(req.params.id)
        .then(function(user){
            res.render("editUser", {user: user})
        })

        /*let userFound = users.find(function(user){
            return user.id == req.params.id
         });

        res.render("editUser", {user : userFound})
        */
    },
    update: (req, res) => {
        db.Users.update({
            name: req.body.name,
                user: req.body.user,
                email: req.body.email,
                city: req.body.city,
                img: req.file ? req.file.filename: "default.png",
                password: bcrypt.hashSync(req.body.password, 15),
            },{
            where: {
                id: req.params.id
            }
        });

    res.redirect("/usuarios") 
        /*
        let userUpdate = users.map(function(user){
            if(user.id == req.params.id){
                user.name = req.body.name;
                user.user = req.body.user;
                user.email = req.body.email;
                user.birthDate = req.body.birthDate;
                user.adress = req.body.adress;
                user.city = req.body.city;
                user.provincia = req.body.provincia;
                user.img = req.file ? req.file.filename: "default.png";
                user.password = req.body.password;
                user.password_confirm = req.body.password_confirm,
                user.interest = req.body.interest;
            }
            return user;
        })

        writeFile(users);

        res.redirect ("/usuarios")
        */
        },
        destroy: function(req, res){
            db.Users.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.redirect("/usuarios");
        }      
}



module.exports = usersController;