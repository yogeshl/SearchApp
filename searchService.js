(function(){
   'use strict';

    angular.module('app')
    .factory('SearchService',['$http',function($http){
       var _dataSource;
       
       

       var service = {
           usersInfo:_dataSource
       };


       return service;

    }]);

    

})();