var index = angular.module('index', ['ngRoute']);

index.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'template/home.ejs'
		})
		.when('/menu',{
			templateUrl: 'template/menu.ejs'
		})
		.otherwise({
			redirectTo: '/'
		})
    //$locationProvider.html5Mode(true);
}]);



// index.run(['$location', '$rootScope', function($location, $rootScope) {
//     $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
//         $rootScope.title = current.$route.title;
//     });
// }]);

