angular.module('starter.controllers', [])

.controller('PatientCtrl', function($scope) {})

.controller('AccueilCtrl', function($scope) {
    $scope.data = {};
    $scope.data.urgence = 'blue';
    $scope.transmettre = function(){
      console.log("transmission");
      $scope.buttonStyle = "color: red"
      //$scope.data.urgence = 'red';
    }
  })

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

.controller('Ordonnances1Ctrl', function($scope, Ordonnances) {
  $scope.ordonnances = Ordonnances.all();
})

.controller('CreateResultCtrl', function($scope) {})


.controller('IdCtrl', function($scope) {

})

.controller('MenuCtrl', function($scope) {})

.controller('SuivisCtrl', function($scope) {})

.controller('UrgenceCtrl', function($scope) {})

.controller('StocksCtrl', function($scope) {})

.controller('RecherchePatientCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.users = [];
})

.controller('ModulesCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
