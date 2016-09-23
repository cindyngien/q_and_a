console.log('user controller - server')
var mongoose = require('mongoose')
var User = mongoose.model('users')

function userController(){
    this.createUser = function(req, res){
        User.findOne({name: req.body.name}, function(err, user){
            if(err){
                console.log(req.body.name + ' not in database')
            } else {
                    if(user === null){
                        var newUser = new User({name: req.body.name});
                        newUser.save(function(err, newUser){
                            if(err){
                                console.log('new user saved!');
                            } else {
                                console.log('wow your user sucks, it didnt work');
                                req.session.userName = req.body.name
                                res.json({user:  newUser, session: req.body.name});
                            }
                        })
                    } else {
                        req.session.userName = req.body.name
                        res.json({user:  user, session: req.body.name});
                    }
            }
        })
    };

    this.getUser = function(req, res){
        User.findOne({name: req.session.userName}, function(err, user){
            if(err){
                res.send({session: false})
            } else {
                res.send({session: user})
            }
        })
    };
    this.logout = function(req, res){
        req.session.userName = null;
        res.json({session: null})
    };
}
module.exports = new userController();
