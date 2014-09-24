var myapp = angular.module('myapp', []);
myapp.controller('formCtrl', function ($scope){	
	$scope.data = {
					personname:'',
		        	jobtitle: '',
		        	tedioustask: '',
		            malename: '',
		        	dirtytask: '',
		        	celebrity: '',
		        	uselessskill: '',
		        	adjective: '',
		        	obnoxiouscelebrity: '',
		        	hugenumber: ''
		    		};

	$scope.reset = function(){
		$scope.data = {
				personname:'',
	        	jobtitle: '',
	        	tedioustask: '',
	            malename: '',
	        	dirtytask: '',
	        	celebrity: '',
	        	uselessskill: '',
	        	adjective: '',
	        	obnoxiouscelebrity: '',
	        	hugenumber: ''
	    		};

	};

});
	
	