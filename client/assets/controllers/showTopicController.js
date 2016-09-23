app.controller('showTopicController', function($scope, dashboardFactory, topicFactory, userFactory, $routeParams, $http, $location){
    console.log('in showing topic controller - client')
    $scope.user = []
    $scope.session = []
    $scope.topics = []
    $scope.oneTopic = []
    console.log($routeParams.id, 'route id')

    if(!userFactory.session){
        console.log('session user is not here', $scope.session, $scope.user)
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    } else {
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    }



    topicFactory.getOneTopic($routeParams.id, function(topic){
        console.log($routeParams.id, 'route id')
        $scope.oneTopic = topic
        console.log('got the question', $scope.oneTopic)
    })

    $scope.logout = function(){
        dashboardFactory.logout(function(){
            $location.url('/')
        })
    }

    $scope.like = function(answerID){
        topicFactory.likeButton(answerID,function(likes){
            topicFactory.getOneTopic($routeParams.id, function(topic){
                console.log($routeParams.id)
                $scope.oneTopic = topic
                console.log('LIKING THIS +1', $scope.oneTopic)
            })
        })
    }
})
