angular.module('sos-redacao').service('toastService', function ($mdToast) {
    var service = this;
    service.showMessage = showMessage;

    function showMessage(message) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .hideDelay(3000)
        );
    }

    return service;
});