window.EditController = function ($scope, $http, $routeParams, $location) {
    var apiUrl = "http://localhost:3000/teachers/"
    var id = $routeParams.id

    $scope.detail = function (){
        $http.get(apiUrl + id)
        .then(function (res){
            console.log(res);
            $scope.inputValue = res.data
        })
    }
    $scope.onUpdate = function (id){
        $location.path(`/update-teacher/${id}`)
    }
    $scope.onList = function (){
        $location.path(`/`)
    }
    $scope.detail()
}