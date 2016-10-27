(function() {
	"use strict";
	var angular=require('angular');
	var app=angular.module('test', ['ui.router','ngAnimate','toastr']);
	require("../../lib/angularjs/angular");
	require("../../lib/angularjs/angular-ui-router");
	require("../../lib/angular-animate/angular-animate.min");
	require("../../lib/totas/angular-toastr.tpls");
	require('./route');
	require('./config');
	require('./utils');
	require('../services/apiService');
	require('../services/const');
	require('../services/popTotas');
	require('../controllers/home/homeCtrl');
	require('../controllers/login/loginCtrl');
	require('../controllers/test/testCtrl');
	require('../../css/style.css');

})();