window.AddController = function ($scope, $http, $location){
    var apiUrl = "http://localhost:3000/teachers/"

    $scope.add = function (){
        $http.post(apiUrl, $scope.t)
        .then(function (res){
            // console.log(res);
            $location.path("/")
        })
    }
}