/**
 * MainController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var MainController = {
    index: function(req, res) {
        res.view();
    },
    signup: function(req, res) {
        var username = req.param("username");
        var password = req.param("password");

        var findOrCreate = Users.findOrCreate({ username: username }, { username: username, password: password }).exec(async(err, user, wasCreated) => {
            if (err) {
                return res.serverError(err);
            }
            if (wasCreated) {
                sails.log("El usuario ha sido creado: " + username);
                return res.status(200);
            } else {
                sails.log("Usuario ingresado ya existe: " + username);
                return res.status(400);
            }
        });
    },
    login: function(req, res) {
        var username = req.param("username");
        var password = req.param("password");

        Users.findOne({ username: username }, (err, usr) => {
            if (err) {
                return res.serverError(err);
            } else {
                if (usr) {
                    sails.log("Usuario encontrado");
                    if (usr.password == password) {
                        req.session.user = usr;
                        res.send(usr);
                        return res.status(200);
                    } else {
                        return res.send(400, { error: "Wrong Password" });
                    }
                } else {
                    return res.send(404, { error: "User not Found" });
                }
            }
        });
    },
    chat: function(req, res) {
        if (req.session.user) {
            res.view("main/chats", { username: req.session.user.username });
        } else {
            res.redirect("/");
        }
    },

    hello: function(req, res) {
        res.view();
    },
    saludo: (req, res) => {
        return res.send({
            success: true,
            message: "Bienvenido " + req.param("texto")
        });
    }
};
module.exports = MainController;