var index = angular.module('index', ['ngRoute']);

index.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'template/home.html'
		})
		.otherwise({
			redirectTo: '/'
		})
    $locationProvider.html5Mode(true);
}]);

