window.ListController = function ($scope, $http, $location){
    var apiUrl = "http://localhost:3000/teachers/"

    $scope.getTeachers = function (){
        $http.get(apiUrl)
        .then(function (res){
            // console.log(res.data);
            $scope.teachers = res.data
        })
    }
    $scope.getTeachers()

    $scope.onDetail = function (id) {
        $location.path(`/detail-teacher/${id}`)
    }
}