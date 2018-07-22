angular.module('sos-redacao').controller('MyProgressController', function($state, $scope, EssayFactory, toastService, authentication){


  $scope.correctedEssays = [];
  $scope.$parent.title = "Meu Progresso";
	$scope.scorePoints = [
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
	];


  getMyCorrectedEssays = function(){

    EssayFactory.getMyCorrectedEssays(authentication.currentUser().id).then(function(result){
            $scope.correctedEssays = result.data.data;
			$scope.scorePoints = fillInScoreChart($scope.correctedEssays);

			chartRender();

        }).catch(function(result){
        toastService.showMessage(result.data.message);
    });
	}

  init = function(){
    getMyCorrectedEssays();
  };

  function chartRender() {
	  var chart = new CanvasJS.Chart("chartContainer", {
		  animationEnabled: true,
		  theme: "light2",
		  axisY:{
			  includeZero: false
		  },
		  axisX: {
		  	interval: 1
		  },
		  data: [{
			  type: "line",
			  xValueFormatString:"Nota ####",
			  dataPoints: $scope.scorePoints
		  }]
	  });

	  chart.render();
  }

  function fillInScoreChart(essays) {
	  var dataPoints = [];
	  essays.forEach(function (essay, index) {
		  dataPoints.push({y: essay.finalScore, x: index + 1});
	  });

	  return dataPoints;
  }


  init();


    angular.element(document).ready(function () {
        var id = $state.current.name;
        document.getElementById(id).style.backgroundColor = "#6ab04c";
        document.getElementById(id).style.fontWeight = "bold";
    });
});
