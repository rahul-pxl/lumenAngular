'use strict';

var articleServices = angular.module('articleServices', ['ngResource']);

articleServices.factory('Article', ['$resource', 
	function($resource){
		 return $resource('api/article/:articleId', {}, {
	      get: {method:'GET', params:{articleId:'articles'}, isArray:false}
	    });
	}]);