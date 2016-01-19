'use strict';

var articleAppController = angular.module('articleAppController', []);
console.log('in articleAppController');

articleAppController.controller('ArticleListCtrl', function ($scope, $http) {
	console.log('in articleListCtrl');

	$http.get('/api/article').success(function(data) {
		$scope.articles = data;
	});
});

articleAppController.controller('ArticleDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http){

		$http.get('/api/article/'+ $routeParams.articleid).success(function(data) {
			$scope.articles = data;
		});
	}]);

articleAppController.controller('CreateArticleCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location){
		
		$scope.save = function(article_id){
			$http({
				method  : 'POST',
				url     : '/api/article',
	            data    : $.param($scope.articleData),
	            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
           }).
			success(function(response){
				$location.path('/article');
			}).
			error(function(response){
				alert('Incomplete Form');
			});

			console.log(data);
		}
	}]);

articleAppController.controller('UpdateArticleCtrl', ['$scope', '$http',
	function($scope, $http){
		
		$scope.save = function(article_id){
			$http({
				method  : 'POST',
				url     : '/api/article',
                data    : $.param($scope.articleData),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
           }).
			success(function(response){
				location.reload();
			}).
			error(function(response){
				console.log(response);
				alert('Incomplete Form');
			});

			console.log(data);
		}
	}]);