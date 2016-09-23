console.log('topic controller - server');
var mongoose = require('mongoose');
var User = mongoose.model('users');
var Topic = mongoose.model('topics');
// var Products = mongoose.model('Products');
// var Customers = mongoose.model('Customers');
// var Orders = mongoose.model('orders')
function topicController(){
    this.getTopics = function(req,res){
        Topic
            .find({})
            .populate('_answers _user')
            .exec(function(err, allTopics){
            if(err){
                console.log(err)
            } else {
                res.json({allTopics: allTopics})
            }
        })
    }

    this.getOneTopic = function(req, res){
        console.log(req.params.id, 'invoking function to grab 1 question')
        Topic
            .findOne({_id: req.params.id})
            .populate('_user _answers')
            .populate({path: '_answers', populate: {path: '_user'} })
            .exec(function(err, oneTopic){
                if(err){
                    console.log(err)
                } else {
                    res.json({oneTopic: oneTopic})
                }
            })

    }

    this.createTopic = function(req, res){
        console.log(req.body, 'in createTopic')
        console.log(req.params.id, ' user iD')
        User.findOne({_id: req.params.id}, function(err, user){
        	if(err){
                console.log(err)
        	}else {
        		var topic = new Topic({title: req.body.topic, description: req.body.description, category: req.body.category})
        		topic._user = req.params.id
        		topic.save(function(err, topic) {
        			user._topics.push(topic._id);
        			user.save(function(err, updated) {
        				res.send({newTopic:updated})
        			});
        		});
        	}
        })

    };
}
module.exports = new topicController();
