app.controller('dashboardController', function($scope, dashboardFactory, userFactory, $http, $location){
    console.log('in dashboard controller - client')
    $scope.user = []
    $scope.session = []
    $scope.topics = []


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
        dashboardFactory.createTopic(data, $scope.user, function(user){
            dashboardFactory.getTopics(function(topics){
                $scope.topics = topics
            })
        })
    }

    $scope.logout = function(){
        dashboardFactory.logout(function(){
            $location.url('/')
        })
    }

    dashboardFactory.getTopics(function(topics){
        $scope.topics = topics
    })
})
