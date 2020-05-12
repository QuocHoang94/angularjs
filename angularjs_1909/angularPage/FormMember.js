var angularApp = angular.module('my_app', []);
angularApp.controller('demo', ['$scope', '$window', function demo($scope, $window) {
    $scope.patternphoneNumber = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
    $scope.lUsers = [];
    // window.localStorage.setItem("key", "value");
    $scope.searchText = "";
    $scope.oMember = {
        iId: 0,
        sUsername: "",
        sEmail: "",
        sPassword:"",
        sPhone: ""
    };

    $scope.initForm = function()
    {
        //1. check localStorage
        //2. get data from localStorage
        if ( typeof(Storage) !== "undefined") {
            var sJsonUser = localStorage.getItem('Members');
            if(sJsonUser != null){
                $scope.lUsers = JSON.parse(sJsonUser);
            }
            //edit handler
            //get id from url
            //get item by id
            var iUserId = getParameterByName('id');  
            if(iUserId != null)
            {
                for (var i = $scope.lUsers.length - 1; i >= 0; i--) {
                    if($scope.lUsers[i].iId == iUserId)
                    {
                        $scope.oMember = $scope.lUsers[i];
                        break;
                    }
                }
            }

            console.log("Hoang: ", getParameterByName('id'));

            console.log('Browser is support')    
        }else{
            alert("browser is not support");
        }
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
    //Dom event    
    $scope.addtUser = function() {
        // debugger;
        var oMember = angular.copy($scope.oMember);
        oMember.iId = $scope.lUsers.length + 1;
        $scope.lUsers.push(oMember);        
        localStorage.setItem("Members",JSON.stringify($scope.lUsers));
        // $scope.lUsers =JSON.parse(localStorage.getItem("Members"));

        $window.location.href = '/ListMember.html';        

        // $scope.oMember = {};
        // $scope.userForm.username.$touched = false;
        // $scope.userForm.password.$touched = false;
        // $scope.userForm.email.$touched = false;
        // $scope.userForm.phone.$touched = false;
    }
    $scope.editUser = function(iUserId){
        window.location.href = "/edit?id=" + iUserId;
    }
}])