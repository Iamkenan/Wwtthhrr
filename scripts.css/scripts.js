
var myapp = angular.module('WeatherApp', ['ngAnimate']);
myapp.controller('WeatherControl', function($scope, $http){

  $scope.getWeather = function(){
  //$scope.city = 'Atlanta'
  $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.city+'&appid=ac86309563d81268905dde5f07e3217f')
  .then(function(response){
    $scope.all = response.data;
    $scope.city = '';
    $scope.getBackground();
    return $scope.all;
  })};

  $scope.getBackground = function(){
    $scope.url;
    $http.get()
  }




});
