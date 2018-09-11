angular.module('sos-redacao').controller('NotificationsController', function($state, $scope, $stateParams, authentication, toastService, NotificationService){

  $scope.notifications = [];
  $scope.$parent.title = "Notificações";

	var init = function () {
    getNotifications();
	};

  getNotifications = function(){
    NotificationService.getNotifications(authentication.currentUser().id, authentication.currentUser().userKind).then(function(result){
            $scope.notifications = result.data.data;
        }).catch(function(result){
        toastService.showMessage(result.data.message);
    });
	}

  $scope.deleteNotification = function(idNotification, index){
    NotificationService.deleteNotification(idNotification).then(function(result){
            toastService.showMessage(result.data.message);
            $scope.notifications.splice(index, 1);
            $state.go('notification');
        }).catch(function(result){
        toastService.showMessage(result.data.message);
    });
  }

	init();

    angular.element(document).ready(function () {
        var id = $state.current.name;
        document.getElementById(id).style.backgroundColor = "#6ab04c";
        document.getElementById(id).style.fontWeight = "bold";
    });
});
