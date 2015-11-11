(function(){
	// module
	var info = angular.module('info', []);

	//controller 
	info.controller('tel', function($scope, $http){
	
	// Data 
    $http.get('data.json').success(function(data, status, header, config){
        if(status === 200){
            $scope.phones = data;
        }
    });

	//Filter
	var date = Date();
	$scope.today = date;

	});
	// tel controller close here

})();