module.exports=function(app){
	'use strict'
app.factory('popTotas', ['$rootScope','$timeout','toastr',
		function($rootScope,$timeout,toastr) {


		var pop = {
			show: function(_str) {
				  toastr.info(_str);
			},
			top: function(_str) {
				  toastr.info(_str);
			}
		}

		return pop;

	}])
}