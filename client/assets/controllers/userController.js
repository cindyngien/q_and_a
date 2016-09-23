app.controller('userController', function($scope, userFactory, $http, $location){
    console.log('FACTORY INDEX CONTROLLER')
    $scope.users = []
    $scope.session = []

    if(!userFactory.session){
        console.log('user session not here', $scope.session, $scope.user)
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    } else {
        console.log('is user')
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    }

    $scope.checkUser = function (data){
        console.log(data)
        userFactory.checkUser(data, function(returned){
            $scope.session = returned
            console.log($scope.session)
            $location.url('/dashboard')
        })

    }

    $scope.logout = function(){
        dashboardFactory.logout(function(){
            $location.url('/')
        })
    }

})
