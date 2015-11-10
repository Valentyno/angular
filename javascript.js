(function(){
	// module
	var info = angular.module('info', []);

	//controller
	info.controller('tel', function($scope){
	
	// Data
		$scope.phones = [
	{
        "age": 14,
        "carrier": "T-Mobile",
        "id": "t-mobile-mytouch-4g",
        "imageUrl": "img/phones/t-mobile-mytouch-4g.0.jpg",
        "name": "T-Mobile myTouch 4G",
        "snippet": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi.",
        "status": true
    },
    {
        "age": 15,
        "carrier": "US Cellular",
        "id": "samsung-mesmerize-a-galaxy-s-phone",
        "imageUrl": "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg",
        "name": "Samsung Mesmerize™ a Galaxy S™ phone",
        "snippet": "The Samsung Mesmerize™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance,even outdoors",
        "status": false
    },
    {
        "age": 11,
        "carrier": "Verizon",
        "id": "droid-pro-by-motorola",
        "imageUrl": "img/phones/droid-pro-by-motorola.0.jpg",
        "name": "DROID™ Pro by Motorola",
        "snippet": "The next generation of DOES.",
        "status": true
    },
    {
        "age": 16,
        "carrier": "Sprint",
        "id": "sanyo-zio",
        "imageUrl": "img/phones/sanyo-zio.0.jpg",
        "name": "SANYO ZIO",
        "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value.",
        "status": true
    }
    ];

	//Filter
	var date = Date();
	$scope.today = date;

	});
	// tel controller close here

})();