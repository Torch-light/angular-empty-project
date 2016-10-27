module.exports=function(app){
	"use strict";
	app.config(['$stateProvider','$urlRouterProvider','$locationProvider',
		function($stateProvider,$urlRouterProvider,$locationProvider){
			$locationProvider.html5Mode(true);
			$stateProvider
			.state('test',{
				url:'/test',
				cache:false,
				templateUrl:'template/test/test.html',
				controller:'testCtrl as vm'
			})
			.state('login',{
				url:'/login',
				cache:false,
				templateUrl:'template/login/login.html',
				controller:'loginCtrl as vm'
			})
			.state('home',{
				url:'/home',
				cache:false,
				templateUrl:'template/home/home.html',
				controller:'homeCtrl as vm'
			})
			$urlRouterProvider.otherwise('/test');
	}]);
};