var app = angular.module("Myapp", []);
app.controller("Myctr", function ($scope, $http) {
    
    $scope.gen = "";
    $scope.ctry = "";
    $scope.result = [];
  


    $scope.dataary = [];

    $http.get("https://restcountries.eu/rest/v2/all").then(function (response) {
        for (x = 0; x < response.data.length; x++) {
            //var myData = response.data[x].name;
            $scope.dataary.push(response.data[x].name);
            //alert($scope.myData);
        }

    });


    $scope.submitLoginForm = function () {
         $scope.fname = "";
        $scope.lname = "";
        $scope.gen = "";
        $scope.ctry = "";
        $scope.myTextarea = "";
        $scope.all = "";
        var hbs = [];
        var hbtv = document.getElementsByName("chkbt1");

        hbtv.forEach(function (hobby) {

            if (hobby.checked) {
                hbs.push(hobby.value);


            }

        })




        var formdata = {

            "FirstName": document.getElementById("fname").value,
            "LastName": document.getElementById("lname").value,
            "Gender": $scope.gen,
            "country": $scope.ctry,
            "About": document.getElementById("about").value,
            "Hobbies": hbs,

        }
       $scope.result = JSON.stringify(formdata);
        //alert(JSON.stringify(formdata));
        
        console.log(formdata);
      

        // $http({
        //         method: 'PUT',
        //         url: 'http://my-json-server.typicode.com/aniruddhchaturvedi92/qliktag/login',
        //         data: formdata,
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         }
        //     });
    };


});
