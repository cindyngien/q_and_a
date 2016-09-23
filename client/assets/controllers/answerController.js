app.controller('answerController', function($scope, dashboardFactory, topicFactory, userFactory, $routeParams, $http, $location){
    console.log('in the answers controller - client');
    $scope.user = []
    $scope.session = []
    $scope.topics = []
    $scope.oneTopic = []
    console.log($routeParams.id, 'params ID')

    if(!userFactory.session){
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    } else {
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    }

    $scope.logout = function(){
        dashboardFactory.logout(function(){
            $location.url('/')
        })
    }

    $scope.createTopic = function(data){
        dashboardFactory.createTopic(data, $scope.user, function(user){
            dashboardFactory.getTopics(function(topics){
                $scope.topics = topics
            })

            $location.url('/dashboard')
        })
    }

    topicFactory.getOneTopic($routeParams.id, function(topic){
        $scope.oneTopic = topic
    })

    $scope.submitAnswer = function(id, data){
        if(data){
            topicFactory.submitAnswer(id, data, function(returned){
                $location.url('/dashboard')
            })
        }
    }
})
