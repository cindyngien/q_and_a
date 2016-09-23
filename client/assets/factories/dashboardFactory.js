app.factory('dashboardFactory', function($http, $location){
    var factory = [];
    factory.session = [];
    factory.topic = []

    factory.logout = function(callback){
        $http.get('/logout').success(function(output){
            console.log(output);
            callback()
        })
    }

    factory.createTopic = function(data, ID, callback){
        console.log(data, ID.session._id, 'factory data view');

        $http.post('/topic/' + ID.session._id, data).success(function(output){
            console.log(output, 'new question');
            factory.topic.push(output.newTopic)
            callback(output.newTopic);
        })
    };

    factory.getTopics = function(callback){
        console.log('getting questions')
        $http.get('/topic').success(function(output){
            console.log(output.allTopics)
            factory.topic = output.allTopics
            callback(output.allTopics)
        })
    }
    return factory
})
//
