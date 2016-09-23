app.factory('topicFactory', function($http, $location){
    var factory = [];
    factory.session = [];
    factory.oneTopic = []

    factory.createTopic = function(data, callback){
        console.log(data);

        $http.post('/topic', data).success(function(output){
            console.log(output);
            callback(output);
        })
    };

    factory.getOneTopic = function(ID, callback){
        console.log(ID)
        console.log('getting the specific question')
        $http.get('/oneTopic/' + ID).success(function(output){
            factory.oneTopic = output.oneTopic;
            console.log(factory.oneTopic, 'QUESTION FOUND')
            callback(output.oneTopic)
        })
    }

    factory.submitAnswer = function(id, data, callback){
        $http.post('/answer/' + id, data).success(function(output){

            callback()
        })

    }

    factory.likeButton = function(answerID, callback){
        console.log(answerID, "answer id")
        $http.get('/answers/' + answerID).success(function(output){

            callback()
        })
    }
    return factory
})
//
