var index = angular.module('index', ['ui.router']);

// , ['ngRoute']
// index.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){


index.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  $locationProvider.html5Mode(true);
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "template/home.ejs"
    })
    // .state('state1.list', {
    //   url: "/list",
    //   templateUrl: "partials/state1.list.html",
    //   controller: function($scope) {
    //     $scope.items = ["A", "List", "Of", "Items"];
    //   }
    // })
    .state('menu', {
      url: "/menu",
      templateUrl: "template/menu.ejs",
      // controller('menuController', ['', function(){
      	
      // }])
    })
    // .state('state2.list', {
    //   url: "/list",
    //   templateUrl: "partials/state2.list.html",
    //   controller: function($scope) {
    //     $scope.things = ["A", "Set", "Of", "Things"];
    //   }
    // });
	.state('aboutus', {
      url: "/aboutus",
      templateUrl: "template/aboutus.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "template/login.html"
    });
});


