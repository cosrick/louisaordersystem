index.controller('menuCtrl',['$scope','$http', '$window','$modal', '$log', '$routeParams' ,function($scope,$http,$window, $modal, $log, $routeParams){

  $scope.imgArray = [1,2,3,4,5,6,7,8];
  
  $scope.loadMenu = function(){
    $scope.menu = [];
    $scope.itemNumber = 0;
    $http.get('/api/menu').success(function(data){
      angular.forEach(data, function(val){
        $scope.menu.push(val);
      });
      $scope.itemNumber = $scope.menu.length;
      console.log($scope.menu);
    });
  };

  $scope.loadMenu();

  $scope.findSingleMenuItem = function(){
    $scope.singleMenuItem = [];
    $http.get('/api/menu/'+$routeParams.id).success(function(data){
      $scope.singleMenuItem.push(data);
      console.log($scope.singleMenuItem);
    });
  };
  $scope.findSingleMenuItem();



  $scope.addMenuItem = function(){
    $http.post('api/menu/create', {
      productName: $scope.inputName,
      description: $scope.inputDescription,
      price: $scope.inputPrice,
      category: $scope.inputCategory
      
    }).success(function() {
      console.log("success");
      $window.location.href= '/#/menu';
    });
    // .
    // error(function(err) {
    //   console.log(err);
    // });
  }

  this.editing = false;
  $scope.changeEditMode = function(){
    if ($scope.editing === true) {$scope.editing = false;}
    else {$scope.editing = true;}
  }



  // ************modal************
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'template/test1.ejs',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

}]);

index.controller('addMenuCtrl', function($scope,$http,$window){
  
  // $scope.addMenuItemInterface = function(){
  //   var newItem = {
  //     productName:'',
  //     description:'',
  //     price:0,
  //     category:''
  //   }
  //   $scope.newItems.push(newItem);
  //   console.log(newItems);
  // }
  $scope.addMenuItem = function(){
    $http.post('api/menu/create', {
      productName: $scope.inputName,
      description: $scope.inputDescription,
      price: $scope.inputPrice,
      category: $scope.inputCategory
      
    }).success(function() {
      console.log("success");
      $window.location.href= '/#/addMenu';
    });
    // .
    // error(function(err) {
    //   console.log(err);
    // });
  }

})

// index.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

//   $scope.items = ['item1', 'item2', 'item3'];

//   $scope.animationsEnabled = true;

//   $scope.open = function (size) {

//     var modalInstance = $modal.open({
//       animation: $scope.animationsEnabled,
//       templateUrl: 'template/test1.ejs',
//       controller: 'ModalInstanceCtrl',
//       size: size,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         }
//       }
//     });

//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };

//   $scope.toggleAnimation = function () {
//     $scope.animationsEnabled = !$scope.animationsEnabled;
//   };

// });

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

index.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

