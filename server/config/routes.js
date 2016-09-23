console.log('routes');
var users = require('../controllers/userController.js');
var topics = require('../controllers/topicController.js');
var answer = require('../controllers/answerController.js');

module.exports = function(app){
  app.post('/login', users.createUser);
  app.get('/logins', users.getUser);
  app.get('/topic', topics.getTopics);
  app.get('/oneTopic/:id', topics.getOneTopic);
  app.post('/topic/:id', topics.createTopic);
  app.post('/answer/:id', answer.createAnswer);
  app.get('/answers/:id', answer.like);
  app.get('/logout', users.logout);


}
