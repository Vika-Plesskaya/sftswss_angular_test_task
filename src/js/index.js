var app = angular.module("testTask", []);

app.controller('productsCtrl', ['$scope', function ($scope) {

	$scope.data = {
		"items": [
		{
			"type" : "Child",
			"img" : "item1",
			"price" : "3.20",
			"name" : "T-SHIRT",
			"options": ["Size", "S", "M", "L", "XL"]
		}
		,{
			"type" : "Child",
			"img" : "item2",
			"price" : "13.30",
			"name" : "Pants FORCLAZ",
			"options": ["Size", "M", "XL"]
		}
		,{
			"type" : "Men",
			"img" : "item1",
			"price" : "5.00",
			"name" : "T-SHIRT",
			"options": ["Size", "XL"]
		}
		,{
			"type" : "Women",
			"img" : "item2",
			"price" : "3.21",
			"name" : "T-SHIRT",
			"options":  ["Size", "S", "M", "L", "XL"]
		}
		,{
			"type" : "Women",
			"img" : "item3",
			"price" : "31",
			"name" : "backpack",
			"options": ["color", "red", "blue", "black"]
		}
		, {
			"type" : "Other",
			"img" : "item3",
			"price" : "0",
			"name" : "car",
			"options": ["color", "red", "blue", "black"]
		}
  	]
	};

	// $scope.templates =
 //    [{ name: 'header.html', url: '/templates/header.html'},
 //     { name: 'footer.html', url: '/templates/footer.html'}];
 //  	$scope.template = $scope.templates[0];

	$scope.showCategory = {
			"men" : true,
			"women" : true,
			"child": false
	};

    $scope.setFilter = function(key, value){

        $scope.showCategory[key]=value;

    }

    $scope.filterByCategory = function(item) {
    if ($scope.showCategory){
      var res = $scope.showCategory[item.type.toLowerCase()] || false;
      return res;
    }
    else
      return item;
    };

	$scope.changeFilter  = function (obj) {
		return !$scope.showCategory[obj];
	}

	$scope.clearFilter = function () {
		$scope.showCategory = {
			"men" : true,
			"women" : true,
			"child": true
		};
	}

}]);


app.controller('menuCtrl', ['$scope', function ($scope) {

	$scope.data = {
		"footerMenu" : [
			{
				"name": "Credits",
				"link": "https://softswiss.com/",
				"title": "credits"
			},
			{
				"name": "Privacy",
				"link": "https://softswiss.com/",
				"title": "privacy"
			},
			{
				"name": "About",
				"link": "https://www.softswiss.com/about-us/",
				"title": "about us"
			},
			{
				"name": "Contact",
				"link": "https://www.softswiss.com/contact-us/",
				"title": "contact us"
			}
		]};

}]);


$(document).ready(function() {
	$(".anchor_link").click(function () {
		var height = this.offsetTop + 80;
		$('html,body').animate( { scrollTop: height }, 500 );
		return false;
	})
});