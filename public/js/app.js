'use strict';

var articleApp = angular.module('articleApp', [
	'ngRoute',
	'articleAppController',
	'articleServices',
	]);

console.log('in app.js: articleApp');

articleApp.config(['$routeProvider',function($routeProvider) {
console.log('in app.js: routeProvider');
	$routeProvider.
		when('/article',{
			templateUrl: 'list',
			controller: 'ArticleListCtrl'
		}).
		when('/create',{
			templateUrl: 'create',
			controller: 'CreateArticleCtrl'
		}).
		when('/update',{
			templateUrl: 'update',
			controller: 'UpdateArticleCtrl'
		}).
		when('/article/:articleId',{
			templateUrl: 'detail',
			controller: 'ArticleDetailCtrl'
		}).
		otherwise({
			redirectTo: '/article'
		});

}]);