console.log('answer controller - server');
var mongoose = require('mongoose');
var User = mongoose.model('users');
var Topic = mongoose.model('topics');
var Answer = mongoose.model('answers');

function answerController(){

    this.like = function(req, res){
        Answer.findOne({_id: req.params.id}, function(err, oneAnswer){
            if(err){
                console.log(err)
            } else {
                console.log(oneAnswer)
                Answer.update({ _id : oneAnswer._id}, { $inc : { likes : +1 } }, function(err, updated) {
                    if (err) {
                        return res.send(err);
                    } else {
                        res.send({success : true});
                    }
                })
            }
        })
    }

    this.getOneTopic = function(req, res){
        console.log(req.params.id, 'one topic function')
        Topic
            .findOne({_id: req.params.id})
            .populate('_user _answers')
            .populate({path: '_answers', populate: {path: '_user'} })
            .exec(function(err, oneTopic){
                if(err){
                    console.log(err)
                } else {
                    console.log('Found 1 question')
                    res.json({oneTopic: oneTopic})
                }
            })

    }

    this.createAnswer = function(req, res){
        User.findOne({name: req.session.userName}, function(err, user){
            if(err){
                console.log(err);
            } else {
                var newAnswer = new Answer({message: req.body.answer, supporting: req.body.supporting, likes: 0});
                newAnswer._user = user._id;
                newAnswer._topic = req.params.id;
                newAnswer.save(function(err, answer){
                    user._answers.push(newAnswer._id);
                    Topic.update({_id: req.params.id}, {$push: {_answers: newAnswer._id}}, function(err){
                        user.save(function(err, user){
                            res.send({answer: answer});
                        })
                    })

                })
            }
        })
    }
}

module.exports = new answerController();
