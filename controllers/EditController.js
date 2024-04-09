window.EditController = function ($scope, $http, $routeParams) {
    var apiUrl = 'http://localhost:3000/products'
    var id = $routeParams.id
    

    $scope.getDetail = function (){
        $http.get(`${apiUrl}/${id}`).then(function ($response){
            console.log($response);
            $scope.p = $response.data;
            $scope.inputValue = {
                name: $response.data.inputValue,
                description: $response.data.inputValue,
                price: $response.data.inputValue
            }
        })
    }
    $scope.getDetail();
    // $scope.onUpdate = function () {
    //     var updateProduct = {
    //         ...$scope.inputValue
    //     }

    //     $http.put(`${apiUrl}/${id}`,updateProduct)
    //     .then(function ($response){
    //         console.log($response);
    //     })
    // }
}