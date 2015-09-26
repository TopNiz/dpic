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

.controller('OrdonnancesCtrl', function($scope, Ordonnances) {
  $scope.ordonnances = Ordonnances.all();
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
