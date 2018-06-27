angular.module('sos-redacao').controller('MyProgressController', function($state, $scope, EssayFactory, toastService, authentication){


  $scope.correctedEssays = [];
  $scope.$parent.title = "Meu Progresso";


  getMyCorrectedEssays = function(){

    EssayFactory.getMyCorrectedEssays(authentication.currentUser().id).then(function(result){
            $scope.correctedEssays = result.data.data;
            console.log(result.data.data);
        }).catch(function(result){
        toastService.showMessage(result.data.message);
    });
	}

  init = function(){
    getMyCorrectedEssays();
    console.log(chart);
  }

  var chart = new CanvasJS.Chart("chartContainer", {
  	animationEnabled: true,
  	theme: "light2",
  	axisY:{
  		includeZero: false
  	},
  	data: [{
  		type: "line",
      xValueFormatString:"Tema ####",
  		dataPoints: [
  			{ y: 900 },
  			{ y: 850 },
  			{ y: 950 },
  			{ y: 460 },
  			{ y: 450 },
  			{ y: 500 },
  			{ y: 480 },
  			{ y: 480 },
  			{ y: 410 },
  			{ y: 500 },
  			{ y: 150 },
  			{ y: 0 }
  		]
  	}]
  });
  chart.render();

  init();

});
