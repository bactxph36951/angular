window.ListController = function ($scope, $http, $location){
    
    var apiUrl = 'http://localhost:3000/products'
    // console.log(1);
    // khai baso ham
    $scope.getProducts = function () {
        $http.get(apiUrl).then(function ($response) {
            // console.log($response.data);
            $scope.product = $response.data
        })
    }

    $scope.getProducts();
    

    $scope.onDetail = function (id) {
        $location.path(`/detail/${id}`)
    }

    $scope.onEdit = function (id){
        $location.path(`/edit/${id}`)
    }
}