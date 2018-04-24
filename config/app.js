let app = angular.module('sos-redacao', ['ui.router']);

app.run(function ($rootScope, $state, $transitions) {

    return $transitions.onStart({}, function (trans) {

        let nextState = trans.to();
        let fromState = trans.from();
        let stateParams = trans.params();
        return $state.go(nextState, stateParams);
    });
});