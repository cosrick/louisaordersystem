var index = angular.module('index', ['ui.router']);

// , ['ngRoute']
// index.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){


index.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  // $locationProvider.html5Mode(true);
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "template/home.ejs"
    })
    .state('menu', {
      url: "/menu",
      templateUrl: "template/menu.ejs",
      controller: 'menuCtrl'
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
    })
    .state('addMenu', {
      url: "/addMenu",
      templateUrl: "template/addMenuItem.html"
    });

});


index.controller('menuCtrl', ['$scope','$http', function($scope,$http){
  console.log('load index layoutCtrl')


  
  $scope.loadMenu = function(){
    $scope.menu = [];
    $scope.itemNumber = 0;
    $http.get('/api/menu').success(function(data){
      angular.forEach(data, function(val){
        $scope.menu.push(val);
      });
      $scope.itemNumber = $scope.menu.length;
    });
  };
  $scope.loadMenu();

}]);

index.controller('addMenuCtrl', ['$scope,$timeout,$http', function($scope,$timeout,$http){
  
  scope.addMenuItemInterface = function(){
    var newItem = {
      productName:'',
      description:'',
      price:0,
      category:''
    }
    $scope.newItems.push(newItem);
    console.log(newItems);
  }
  $scope.addMenuItem = function(){
    $http.post('/menu/'+id+'/addMenu', {
      productName: newItem.productName,
      description: newItem.description,
      price: newItem.price,
      category: newItem.category
      
    }).
    success(function(data, status, headers, config) {
      // console.log('success', data);
      job.editMode = false;
      job.status = 'update';
      scope.refreshJob(data);
    }).
    error(function(data, status, headers, config) {
      // console.log('error', data);
    });
  }

}])


