module.exports=function(app){
            'use strict';
            app.factory('config', ['',function() {
                        //baseapi
                    var baseApi = 'https://localhost:4559/';
                    var api = {
                        //api
                      
                    };
                    return {
                        baseApi: baseApi,
                        api: api,
                    };
                }])
}