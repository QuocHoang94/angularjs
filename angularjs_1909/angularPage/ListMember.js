var angularApp = angular.module('my_app', []);
angularApp.controller('demo',['$scope', '$window', function demo($scope, $window) {
    $scope.lUsers = [];
    $scope.searchText = "";
    $scope.Submitedit = false;
    //localStorage.setItem("key", "value");
    $scope.Members= (localStorage.getItem('Members')!==null) ? JSON.parse(localStorage.getItem('Members')) : [];
    $scope.oMember = {
        iId: 0,
        sUsername: "",
        sEmail: "",
        sPassword:"",
        sPhone: ""
    };
    $scope.init = function()
    {
        //1. check localStorage
        //2. get data from localStorage
        if ( typeof(Storage) !== "undefined") {
            var sJsonUser = localStorage.getItem('Members');
            if(sJsonUser != null){
                $scope.lUsers = JSON.parse(sJsonUser);
            }            
        }else{
            alert("browser is not support");
        }
    }
    //Dom event    
    $scope.createUser = function(){
        $window.location.href = '/FormMember.html';
    }
    $scope.editUser = function(oUserId){
        $window.location.href = "/FormMember.html?id=" + oUserId.iId;
        // $scope.oMember = angular.copy(iUserId);
        // $scope.Submitedit = true;
    }

    $scope.deleteUser = function(idx){
        localStorage.removeItem("key");
        $scope.Members.splice(idx, 1);
        localStorage.setItem("Members", JSON.stringify($scope.Members));
    }
    $scope.submitEdit = function(member){
        debugger;
        member = $scope.Members.find(x =>x.iId === $scope.oMember.iId);
        member.sUsername =  $scope.oMember.sUsername;
        member.sEmail =  $scope.oMember.sEmail;
        member.sPassword =  $scope.oMember.sPassword;
        member.sPhone =  $scope.oMember.sPhone;
        $scope.oMember = {};
        $scope.Submitedit = false;
        localStorage.setItem("Members", JSON.stringify($scope.Members));
    }
    // $scope.saveUser= function(){
    //         var oMember = angular.copy($scope.oMember);
    //         oMember.iId = $scope.Members.length + 1;
    //         $scope.Members.push(oMember);
            
    //         localStorage.setItem("Members",JSON.stringify($scope.Members));
    //         $scope.Members =JSON.parse(localStorage.getItem("Members"));
    //         $scope.oMember = {};
    //         $scope.userForm.username.$touched = false;
    //         $scope.userForm.password.$touched = false;
    //         $scope.userForm.email.$touched = false;
    //         $scope.userForm.phone.$touched = false;
    // }

    // $scope.editUser = function(member){
    //     // $scope.oMember = angular.copy(member);
    //     // $scope.Submitedit = true;
    //     console.log(member.iId);
    // }
    // $scope.submiteditUser = function(member){
    //     member = $scope.Members.find(x=> x.nId === $scope.oMember.nId);
    //     member.sUsername =  $scope.oMember.sUsername;
    //     member.sEmail =  $scope.oMember.sEmail;
    //     member.sPassword =  $scope.oMember.sPassword;
    //     member.sPhone =  $scope.oMember.sPhone;
    //     $scope.oMember = {};
    //     $scope.userForm.username.$touched = false;
    //     $scope.userForm.password.$touched = false;
    //     $scope.userForm.email.$touched = false;
    //     $scope.userForm.phone.$touched = false;
    //     $scope.Submitedit = false;
    // }
    // $scope.searchText= "";
}])