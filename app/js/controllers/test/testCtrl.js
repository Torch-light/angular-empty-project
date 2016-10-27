module.exports=function(app){
	"use strict";
		app.controller('testCtrl', ['$scope','popTotas','$state',
			function($scope,popTotas,$state) {
				var vm = this;
				vm.login=function(){
					alert(1);
					popTotas.top('111');
					$state.go('login');
				}

			}
		])
}