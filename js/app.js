(function(){
angular.module('tetrisGame', []);
  
  var app = angular.module('app', []);

// a helper service to detect the arrow keys from the key codes
app.factory('keys', function() {
    var keysEnum = { left: 37, up: 38, right: 39, down: 40 };
    var theKeys =  [ keysEnum.left, keysEnum.up, keysEnum.right, keysEnum.down ];
    function isIn(val) {
        var isin = false
        if (theKeys.indexOf(val) >= 0) {
            isin = true;
        }
        return isin;
    }
    function keyFromCode(code) {
        var key = 'unknown';
        switch (code) {
            case 37:
                key = 'left';
                break;
            case 38:
                key = 'up';
                break;
            case 39:
                key = 'right';
                break;
            case 40:
                key = 'down';
                break;
        }
        return key;
    }
    return {
        isIn: isIn,
        keyFromCode: keyFromCode
    };
});

// custom directive to detect the arrow key pressed
app.directive('keypressed', [ 'keys', function (keys) {
    return function (scope, element, attrs) {
        // listen for the events keydown, keypress
        element.bind("keydown keypress", function (event) {
            var code = event.which;
            // if an arrow key is pressed then do something
            if(keys.isIn(code)) {
                console.log(keys.keyFromCode(code));
            }
        });
    };
}]);
})();