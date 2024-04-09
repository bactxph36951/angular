window.AddController = function ($scope, $http, $location) {
    var apiUrl = 'http://localhost:3000/products/'
    // console.log(1);
    $scope.onSubmit = function () {
        var valid = true;

        if(!$scope.inputValue || !$scope.inputValue.name || $scope.inputValue.name < 6 || $scope.inputValue.name > 100){
            valid = false
        }
        if(!$scope.inputValue || !$scope.inputValue.description){
            valid = false
        }
        if(!$scope.inputValue || !$scope.inputValue.price || isNaN($scope.inputValue.price) || $scope.inputValue.price<0){
            valid = false
        }
   
        $http.post(apiUrl,$scope.inputValue).then(function ($response) {
            console.log($response);
            if($response.status == 201){
                $location.path('/')
            }
        })

        console.log(newProduct);
    }
        // $scope.submitForm = function(event) {
        //     // event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện submit
            
        //     var newProduct = {
        //         name: $scope.inputValue.name,
        //         description: $scope.inputValue.description,
        //         price: $scope.inputValue.price
        //     };
    
        //     $http.post(apiUrl, newProduct).then(function(response) {
        //         console.log(response);
        //         // Xử lý kết quả trả về, nếu cần
        //     }, function(error) {
        //         console.error(error);
        //         // Xử lý lỗi nếu có
        //     });
        // };
    
    
   
}