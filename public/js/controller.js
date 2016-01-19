'use strict';

var articleAppController = angular.module('articleAppController', []);
console.log('in articleAppController');

articleAppController.controller('ArticleListCtrl', ['$scope', '$routeParams', 'Article', function($scope, $routeParams, Article) {
	
  	$scope.articles = Article.query();
  	// console.log($scope.articles);

}]);

articleAppController.controller('ArticleDetailCtrl', ['$scope', '$routeParams', 'Article',
	function($scope, $routeParams, Article){
		$scope.articles = Article.get({articleId: $routeParams.articleId });
	}]);

// articleAppController.controller('CreateArticleCtrl', ['$scope', '$http', '$location',
// 	function($scope, $http, $location){
		
// 		$scope.save = function(article_id){
// 			$http({
// 				method  : 'POST',
// 				url     : '/api/article',
// 				data    : $.param($scope.articleData),
// 				headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
// 			}).
// 			success(function(response){
// 				$location.path('/article');
// 			}).
// 			error(function(response){
// 				alert('Incomplete Form');
// 			});

// 			console.log(data);
// 		}
// 	}]);
