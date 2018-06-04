angular.module('sos-redacao').controller('StudyMaterialController', function($state, $scope, StudyMaterialFactory){

  $scope.$parent.title = "Materiais de Estudo";

  $scope.StudyMaterials = [
    {
    name: '50 dicas para escrever uma boa redação',
    fileName: "50-Dicas-Para-escrever-uma-boa-redacao.pdf"
    },
    {
    name: 'manual de redação do Enem 2017',
    fileName: "manual_de_redacao_do_enem_2017.pdf"
    },
    {
    name: 'Redação para concursos',
    fileName: "redacao_para_concursos.pdf"
    },
    {
    name: 'Técnicas de redação para concursos',
    fileName: "tecnicas_de_redacao_para_concursos.pdf"
    }
  ];

  $scope.downloadStudyMaterial = function(fileName){
		StudyMaterialFactory.downloadStudyMaterial(fileName);
	};

});
