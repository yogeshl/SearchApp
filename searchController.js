(function(){
   'use strict';

    angular.module('app')
    .controller('SearchController',['$scope','$http',function($scope,$http){

        $scope.users= [];
        
       $http({method: "GET",url: "MOCK_DATA.json"})
         .then(function(response){
            $scope.users = response.data;
            })
       .catch(function(err){
           console.log(err);
           alert('Error while calling XHR.');
       })

    }]);

    

})();