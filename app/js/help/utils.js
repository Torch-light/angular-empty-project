module.exports=function(app){
	'use strict'
app.factory('utils',['$window','$q','$state','$http','$location',function ($window,$q,$state,$http,$location) {
	var length=0;
	var _phone;
	var utils={
        browserVer:function(){
        	var browser={
        		isWechat:false,
        		isAndroid:false,
        		isIos:false,
        		isChrome:false,
        		isFirefox:false,
        		isSaifari:false,
        	}
				var ua = navigator.userAgent.toLowerCase();
				browser.isWechat = ua.match(/MicroMessenger/i) == "micromessenger" ? true : false;
				browser.isIos = false;
				browser.isAndroid = false;
				if (/iphone|ipad|ipod/.test(ua)) {
					browser.isIos = true;
					browser.isAndroid = false;
				} else if (/android/.test(ua)) {
					browser.isIos = false;
					browser.isAndroid = true;
				}else if(/chrome/.test(ua)){
					browser.isChrome=true;
				}
				else if(/safari/.test(ua)){
					browser.isSaifari=true;
				}
				else if(/firefox/.test(ua)){
					browser.isFirefox=true;
				};
				console.log(browser)
				return browser;
        },
		test:function (parma,type) {
			if (parma==null) {
				return true;
			}
			var str=parma+'';
			switch(type)
			{
				case 'phone':
				if(str.match(/^(13|15|18|14|17)[0-9]{9}$/)){
					return false;
				}else{
					return true;
				}
				break;
				case 'notNull':
				if(str.length>0){
					return false;
				}else{
					return true;
				}
				break;
				case 'numb':
				if(str.match(/^[0-9]+$/)){
					return false;
				}else{
					return true;
				}
				break;
				case 'string':
				if(str.match(/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/)){
					return false;
				}else{
					return true;
				}
				break;
				case 'bank':
				if(str.match(/^[0-9]{16}$|^[0-9]{19}$/)){
					return false;
				}else{
					return true;
				}
				break;
				case 'password':
				if(str.match(/^[A-Za-z0-9_\-]+$/)){
					return false;
				}else{
					return true;
				}
				break;
				case 'telephone':
				if(str.match(/^(13|15|18|14|17)[0-9]{9}$/)){
					return false;
				}else if(str.match(/[0-9-()（）]{7,18}/)){
					return false;
				}else{
					return true;
				}
				break;
			}
		},
		set:function(key,value){
			if (window.sessionStorage) {
				window.sessionStorage.setItem(key,JSON.stringify(value));
			}
			
		},
		get:function(key){
			if (window.sessionStorage) {
				return JSON.parse(window.sessionStorage.getItem(key));	
			}
		},
		clear:function(key){
			window.sessionStorage.removeItem(key); 
		},
		clearAll:function(){
			window.sessionStorage.clear(); 
		},
		displayPhone: function(phone){
			var result = '';
			var input = phone.replace(/\s/g,'');
			var separate = ' ';
			var i = [0,3,7];
			if((input.indexOf('0')===0) && !(input.indexOf('01')===0) && !(input.indexOf('02')===0))
			{
				i = [0,4,8];
			}
			if(input.length > i[0])
			{
				result = result + input.substring(0,i[1]);
			}
			if(input.length > i[1] )
			{
				result = result + separate + input.substr(i[1],4); 
			}
			if(input.length > i[2] )
			{
				result = result + separate + input.substr(i[2],4); 
			}
			return result;
		},
		changeTelephone:function(tel){
			if (tel[0]==0) {
				return tel;
			}else{
			return utils.displayPhone(tel);	
			}
			
		}
	};
	return utils;
}])
}