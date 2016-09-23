app.factory('userFactory', function($http, $location){
    var factory = [];
    factory.session = null;

    factory.getUser = function(callback){
        console.log('get user')
        $http.get('/logins').success(function(output){
            factory.session = output
            console.log(factory.session)
            callback(output)
        })
    };

    factory.checkUser = function(data, callback){
        console.log(data);
        data2 = { 'name': data}
        $http.post('/login', data2).success(function(output){
            console.log(output, 'found and returned session user');
            factory.session = output.session;
            callback(output);
        })
    };

    return factory
})
//
