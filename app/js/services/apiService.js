module.exports=function(app){
	'use strict';
app.factory('apiService',['$http','$rootScope','$location','$q','$state','config','utils','popTotas',
	function ($http,$rootScope,$location,$q,$state,config,utils,popTotas) {
		var service=function (ctrlName) {
			var mosaic = function(param) {
				var u = "?";
				for (var x in param) {
						u = u + x + '=' + param[x] + '&';
				}
				u = u.substr(0, u.length - 1);
	            return u;
			};
			var getRequest = function (baseUrl, action, param, methodType) {
				if($rootScope.inOnLine){
					popTotas.top('无网络连接');
					return false;
				}
                var result = [], apihost = baseUrl + action;
                result.$promise = null;
                if (methodType === undefined || methodType === null) {
                    methodType = 'post';
                }
                methodType = methodType.toLowerCase();
                switch (methodType) {
                    case "get":
                        result.$promise = $http.get(apihost + mosaic(param));
                        break;
                    case "post":
                        result.$promise = $http.post(apihost, param);
                        break;
                    case "delete":
                        result.$promise = $http['delete'](apihost, { params: param });
                        break;
                    case "jsonp":
                        result.$promise = $http.jsonp(apihost + mosaic(param));
                        break;
                    case "put":
                        result.$promise = $http.put(apihost, param);
                        break;
                }
                return result;
            };
			var addToken = function(baseUrl,action,param,methodType,needToken){
				if (!needToken) {
					var token = utils.getToken();
					if (token) {
						token = JSON.parse(token);
						if(token.refresh_token && (token.expiresed_at < new Date().getTime())){
							token = null;
						}
						if(token){
							var access_token = token.access_token;
							$http.defaults.headers.common.Authorization = 'Bearer ' + access_token || null;
						}
					}
					if(!token && action!='oauth/access_token'&&action!='wechat/oauth'){
						if(!$rootScope.isWechat){
							$location.path('/login');
						}
						
					};
				};
			};
			var api={
				call:function(baseUrl,action,param,methodType,needToken){
					if (navigator.onLine) {
						$rootScope.isOnLine = true;
					} else {
						$rootScope.isOnLine = false;
						popTotas.top('无网络连接');
						return false;
					}

					var url = baseUrl + action;
					var xmlHttp; 
					var result =[];
					var curUrl = encodeURIComponent(url + mosaic(param));
					addToken(baseUrl,action,param,methodType,needToken);
					result = getRequest(baseUrl, action, param, methodType);
					if (result.$promise != null) {
		                result.$promise.then(function(response){
		                	if (response) {
                                angular.extend(result, response);
                            }
		                },function(response){
		                	//utils.clearAll();
		                	//$state.go('login');
		                });
	           		};
					return result.$promise;
				}
			}
			return api;
		}
		return service;
}])
}