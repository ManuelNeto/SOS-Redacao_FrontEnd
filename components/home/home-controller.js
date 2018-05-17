angular.module('sos-redacao').controller('HomeController', function($scope, $location, authentication, $state){

	var self = this;
	$scope.$parent.title = "Home";
	$scope.$parent.disableToolbar = false;
	self.title = 'Home';
	console.log(authentication.currentUser());
});