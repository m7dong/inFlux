(function(){
	var app = angular.module('image', [])
		.run(function ($rootScope) {
		$rootScope.current = initial;
		$rootScope.images = ['http://www.schoolplaten.com/nl-kleurplaat-kleurplaten-foto-vogel-p7796.jpg',
					  'http://news.nationalgeographic.com/news/2008/03/images/080318-indonesia-bird_big.jpg',
					  'http://farm3.static.flickr.com/2336/2316755112_aaf81f1bec_o.jpg',
					  'http://farm1.static.flickr.com/148/373783045_47ea5d9e5c.jpg?v=0'
				     ];				 
		$rootScope.previous = [];
		$rootScope.previousImages = [];
    })	
	
	app.directive('errSrc', function() {
	  return {
	    link: function(scope, element, attrs) {
	      element.bind('error', function() {
	        if (attrs.src != attrs.errSrc) {
	          attrs.$set('src', attrs.errSrc);
	        }
	      });
	    }
	  }
	});

	var initial = [
		{
			name: 'Bird',
			wnid: 'n01503061',				  
		},
		{
			name: 'Hen',
			wnid: 'n01792640',
		},
		{
			name: 'Dog',
			wnid: 'n02084071',
		},
		{
			name: 'Pudding',
			wnid: 'n07612632',
		}
	];
	
	app.controller('ButtonController', ['$scope', '$rootScope', function($scope, $rootScope){		
		this.selectButton = function(setButton) {
			if(setButton === 1) {
				var history = angular.copy($rootScope.previous);
				$rootScope.current = history.pop();
				$rootScope.previous = angular.copy(history);
				
				var historyImages = angular.copy($rootScope.previousImages);
				$rootScope.images = historyImages.pop();
				$rootScope.previousImages = angular.copy(historyImages);
			}
			else if (setButton === 2) {
				$rootScope.images.splice(0, 4);
			}
		}
	}]);
	
	app.controller('PanelController', ['$http', '$scope', '$rootScope', function($http, $scope, $rootScope){
		this.selectTab = function(setTab) {
			this.tab = setTab;

			var history = angular.copy($rootScope.previous);
			history.push($rootScope.current);
			$rootScope.previous = angular.copy(history);
			
			var historyImages = angular.copy($rootScope.previousImages);
			historyImages.push($rootScope.images);
			$rootScope.previousImages = angular.copy(historyImages);

			this.imageWnid = $rootScope.current[this.tab - 1]["wnid"];
			
			$http({
				method : "GET",
				url : "http://www.image-net.org/api/text/imagenet.synset.geturls?wnid=" + this.imageWnid
			}).then(function mySucces(response) {
				$rootScope.images = response.data.split("\n");
			}, function myError(response) {
			    console.log(response.statusText);
			});	
			
			
			$http({
				method : "GET",
			    url : "http://www.image-net.org/api/text/wordnet.structure.hyponym?wnid=" + this.imageWnid
			}).then(function mySucces(response) {
				var res = response.data.split("\n");
				for (var i = 0;i < res.length;i++) {
					res[i] = res[i].replace("-", "");
				}
				console.log(res);
				for (var i = 0; i < 4;i++) {	
					$rootScope.current[i]["wnid"] = res[i+1];
				}
			}, function myError(response) {
			    console.log(response.statusText);
			});
		};
		this.isSelected = function(check_value) {
			return this.tab === check_value;
		};
	}]);	
	
})();


