(function(){
	var app = angular.module('image', []);

	app.controller('ImageController', function(){
		this.products = gems;
		this.picIndex = 0;

		this.previousPic = function() {
			console.log(this.picIndex);
			if(this.picIndex >=1) {
				this.picIndex = this.picIndex - 1;
				console.log(this.picIndex);
			}		
		}

		this.nextPic = function() {
			if(this.picIndex <= 29) {
				this.picIndex = this.picIndex + 1;
			}	
		}
	});

	var gems = [
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/1.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/2.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/3.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/4.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/5.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/6.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/7.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/8.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/9.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/10.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/11.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/12.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/13.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/14.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/15.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/16.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/17.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/18.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/19.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/20.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/21.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/22.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/23.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/24.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/25.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/26.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/27.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/28.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/29.jpg',
			tags: [ ]
		},
		{
			images: '/Users/mengdong/Desktop/MC/ESPGame/source/30.jpg',
			tags: [ ]
		},
	];
	
	app.controller('TagController', function(){
		this.tag = {};
		this.max_length = 15;
		this.addTag = function(product) {
			product.tags.push(this.tag);
			this.tag = {};
		}
	});
})();
