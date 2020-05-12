var angularApp = angular.module('my_app', []);
angularApp.controller('demo',['$scope','$filter',function demo($scope,$filter) {
    $scope.patternphoneNumber = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;  
    $scope.myfunction= function(){
        alert($scope.email);
    }
    $scope.Submitedit = false;
    $scope.Members= [];
    $scope.oMember = {
        iId: 0,
        sUsername: "",
        sEmail: "",
        sPassword:"",
        sPhone: ""
    };
    $scope.saveUser= function(){
            var oMember = angular.copy($scope.oMember);
            oMember.nId = $scope.Members.length + 1;
            $scope.Members.push(oMember);
            $scope.oMember = {};
            $scope.userForm.username.$touched = false;
            $scope.userForm.password.$touched = false;
            $scope.userForm.email.$touched = false;
            $scope.userForm.phone.$touched = false;
    }
    $scope.deleteUser = function(){
        $scope.Members.splice(this.$index, 1);
    }
    $scope.editUser = function(member){
        $scope.oMember = angular.copy(member);
        $scope.Submitedit = true;
    }
    $scope.submiteditUser = function(member){
        member = $scope.Members.find(x=> x.nId === $scope.oMember.nId);
        member.sUsername =  $scope.oMember.sUsername;
        member.sEmail =  $scope.oMember.sEmail;
        member.sPassword =  $scope.oMember.sPassword;
        member.sPhone =  $scope.oMember.sPhone;
        $scope.oMember = {};
        $scope.userForm.username.$touched = false;
        $scope.userForm.password.$touched = false;
        $scope.userForm.email.$touched = false;
        $scope.userForm.phone.$touched = false;
        $scope.Submitedit = false;
    }
    $scope.searchText= "";
}])