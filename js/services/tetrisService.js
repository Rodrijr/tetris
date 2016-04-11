(function () {
    angular.module('tetrisGame').service('tetrisService', function ($http) {
        this.getFicha = function () {
          return $http.get('http://localhost:9000/tetris')
            .then(function (response) {
            console.log(response.data);
              return response.data;
            }).catch(function () {
              alert("No se pudo OBTENER la lista de fichas.");
            });
        };
      })})();
