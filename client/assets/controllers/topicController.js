app.controller('topicController', function($scope, dashboardFactory, topicFactory, userFactory, $routeParams, $http, $location){
    console.log('topic controller - client')
    $scope.user = []
    $scope.session = []
    $scope.topics = []
    $scope.oneTopic = []
    console.log($routeParams.id, 'route id')

    if(!userFactory.session){
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    } else {
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    }

    $scope.createTopic = function(data){
        console.log(data, 'creating question')
        if(data.topic){
            dashboardFactory.createTopic(data, $scope.user, function(user){
                dashboardFactory.getTopics(function(topics){
                    $scope.topics = topics
                })

                $location.url('/dashboard')
            })
        }
        else {
            return
        }
    }
    $scope.logout = function(){
        dashboardFactory.logout(function(){
            $location.url('/')
        })
    }
})
