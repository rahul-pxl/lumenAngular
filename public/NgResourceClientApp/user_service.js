'use strict';


App.factory('User', ['$resource', function ($resource) {
	//$resource() function returns an object of resource class
    return $resource(
    		'http://lumen.dev/api/article/:id', 
    		{id: '@id'},
    		{
    			update: {
    			      method: 'PUT' // To send the HTTP Put request when calling this custom update method.
    			}
    			
    		}
    );
}]);