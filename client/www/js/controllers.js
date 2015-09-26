angular.module('starter.controllers', [])

.controller('PatientCtrl', function($scope) {})

.controller('AccueilCtrl', function($scope) {})

.controller('AccProCtrl', function($scope, $http) {
  $scope.data = {};
  $scope.login = function(){
  // document.getElementById("datalog").onclick = function(){
    // $http.post('http://10.45.18.227:3000/api/Users/login', {"email": "test@antoine.fr", "password":"test"})
    $http.post('http://10.45.18.227:3000/api/Users/login', {"email": $scope.data.mail, "password":$scope.data.pass})
    .success(function(data){
      // alert("Authentification acceptée !");
      // document.getElementById("datalog").href="/#/tab/tab-menu"
      $scope.go("/#/tab/menu")
      console.log(data);
      console.log(data.id);
      // return "/#/tab/tab-menu"

    })
    .error(function(data){
      // alert("Authentification rejetée");
      // console.log(data);
      // return "#"
    })
  };
})

.controller('OrdonnancesCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('IdCtrl', function($scope) {

})

.controller('MenuCtrl', function($scope) {})


.controller('RecherchePatientCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.users = [];
})

.controller('ModulesCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
