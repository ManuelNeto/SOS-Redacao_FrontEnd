angular.module('sos-redacao').controller('StudyMaterialController', function($state, $scope, UploadStudyMaterialService){

  $scope.$parent.title = "Materiais de Estudo";

    UploadStudyMaterialService.getAll().then(function (response) {
      $scope.StudyMaterials = response.data.data;
  });



  $scope.downloadStudyMaterial = function(id, title){
      UploadStudyMaterialService.get(id).then(function(response){
          saveAs(dataURItoBlob(response.data.data), title + ".pdf");
      });
  };


  function dataURItoBlob(dataURI) {
      // convert base64/URLEncoded data component to raw binary data held in a string
      var byteString;
      if (dataURI.split(',')[0].indexOf('base64') >= 0)
          byteString = atob(dataURI.split(',')[1]);
      else
          byteString = unescape(dataURI.split(',')[1]);

      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }

      return new Blob([ia], {type:mimeString});
  }

    angular.element(document).ready(function () {
        var id = $state.current.name;
        document.getElementById(id).style.backgroundColor = "#6ab04c";
        document.getElementById(id).style.fontWeight = "bold";
    });

});
