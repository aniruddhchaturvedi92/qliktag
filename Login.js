var app = angular.module("Myapp", []);
app.controller("Myctr", function ($scope, $http) {

    $scope.gen = "";
    $scope.ctry = "";
    //    var temp = [{
    //     "name" :"aniruddh",
    //     "place": "bhopal",
    //     "mob": "123544"

    //     },{
    //         "name" :"vivek",
    //         "place": "bhopal",
    //         "mob": "1235gt4"

    //         }]

    //      var temp2 = [1,2,3]


    //     $scope.myData = temp[1].mob;


    $scope.dataary = [];

    $http.get("https://restcountries.eu/rest/v2/all").then(function (response) {
        for (x = 0; x < response.data.length; x++) {
            //var myData = response.data[x].name;
            $scope.dataary.push(response.data[x].name);
            //alert($scope.myData);
        }

    });


    $scope.submitLoginForm = function () {
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

        

        $http({
                method: 'PUT',
                url: 'http://my-json-server.typicode.com/aniruddhchaturvedi92/qliktag/login',
                data: formdata,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
    };


});