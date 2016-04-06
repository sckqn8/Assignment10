angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $cordovaSms) {
    var result;
    $scope.calcSquare = function(side) {
        var service ='http://default-environment.jh42pvpbky.us-west-2.elasticbeanstalk.com/sckqn8/area/square/'+side; 
        $http({
            method:'GET',
            url:service
        })
        .success(function(data) {
            $scope.areaSquare = "Area of Square="+data.SquareArea;
            result = "Side of Square: "+$scope.areaSquare+" u².";;
            return data.SquareArea;
        })
        
    }
    
    document.addEventListener("deviceready", function() {

      var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
          intent: '' // send SMS with the native android SMS messaging
            //intent: '' // send SMS without open any other app
            //intent: 'INTENT' // send SMS inside a default SMS app
        }
    }
      
        $scope.sendSMS = function(phone) {
            $cordovaSms
              .send(phone, result, options)
              .then(function() {
                alert('Success');
                // Success! SMS was sent
              }, function(error) {
                alert('Error');
                // An error occurred
              });
        }
    })
})

.controller('ChatsCtrl', function($scope, $http) {
$scope.calcRec = function(length, breadth) {
        var service ='http://default-environment.jh42pvpbky.us-west-2.elasticbeanstalk.com/sckqn8/area/rectangle/'+length+'/'+breadth; 
        $http({
            method:'GET',
            url:service
        })
        .success(function(data) {
            $scope.areaRec = "Area of Rectangle="+data.RectangleArea;
            return data.RectangleArea;
        })
    }
})


.controller('AccountCtrl', function($scope, $http) {
 $scope.calcKgs = function(po) {
        var service ='http://default-environment.jh42pvpbky.us-west-2.elasticbeanstalk.com/sckqn8/convert/pounds/'+po; 
        $http({
            method:'GET',
            url:service
        })
        .success(function(data) {
            $scope.kgsResult = "Kgs="+data.Kilograms;
            return data.Kilograms;
        })
    }
 $scope.calcPounds = function(p) {
     var kgs = p/2.2046;
     kgs = Math.round(kgs);
     return kgs;
 }
});
