var formApp = angular.module('formApp', []);

// fetches countries
// formApp.run(function($scope, $http) {
//     $scope.fetchCountries = function() {
//                 $http.get("https://api3-pegasi.uat.crowdstaffing.com/countries?dropdown=true")
//                     .then(function(res) {
//                         $scope.countries = res.data.name;
//                         console.log(countries);
//                     });
//     }
// });

formApp.controller('countryCtrl', function($scope) {
    $scope.name = 'World';
  
    $scope.countries = [
        {
          id: '80c17587-1891-48e1-9447-d53b553534f2',
          name: 'United States',
          abbr: 'US'
        },
        {
          id: '2c4ab035-9113-45f4-92a1-d5b8664fca02',
          name: 'Canada',
          abbr: 'CA'
        },
        {
          id: 'ee55546a-1552-4c0b-b456-d39095bbf593',
          name: 'United Kingdom (Great Britain)',
          abbr: 'GB'
        },
        {
          id: '1f7a5dc2-5c40-4e08-86b5-130f46c1391d',
          name: 'India',
          abbr: 'IN'
        },
        {
          id: '163a1f9f-0d56-4165-996e-c7ab2ae8a717',
          name: 'Australia',
          abbr: 'AU'
        },
        {
          id: '13bdddb7-94f4-4bc2-8eae-83c864fdce7d',
          name: 'New Zealand',
          abbr: 'NZ'
        },
        {
          id: 'd867eaac-a1b0-4d5f-a1a2-529c42a256df',
          name: 'Austria',
          abbr: 'AT'
        },
        {
          id: '66683f60-ab38-46c5-89ab-3963c02664a6',
          name: 'Belgium',
          abbr: 'BE'
        },
        {
          id: 'fbbb9c83-baaf-4ea2-9d87-987a82635856',
          name: 'Bulgaria',
          abbr: 'BG'
        },
        {
          id: 'd3682823-dc28-4a54-be36-23efbb3c953c',
          name: 'Croatia',
          abbr: 'HR'
        },
        {
          id: 'fb50b216-c357-42e4-9386-9adac93b6573',
          name: 'Cyprus',
          abbr: 'CY'
        },
        {
          id: '5b86d6df-4e3e-439f-bfaf-9bf404c010c3',
          name: 'Czech Republic',
          abbr: 'CZ'
        },
        {
          id: '830d6bf9-c93c-4d0b-9908-b60dc7edcf19',
          name: 'Denmark',
          abbr: 'DK'
        },
        {
          id: 'cf7a5f6a-9fec-4511-99a9-f10e806afdc6',
          name: 'Estonia',
          abbr: 'EE'
        },
        {
          id: 'b7487537-b35a-463f-98df-e23f19fd749e',
          name: 'Finland',
          abbr: 'FI'
        },
        {
          id: '5416880e-dce4-4f35-9e75-ea07a14f4de7',
          name: 'France',
          abbr: 'FR'
        },
        {
          id: '3177f928-70b9-4998-929d-a6ba414be8ed',
          name: 'Germany',
          abbr: 'DE'
        },
        {
          id: 'bf81c3f1-c7ee-4792-83ae-d14e1eb317f5',
          name: 'Greece',
          abbr: 'GR'
        },
        {
          id: '3e36161d-f435-49ff-b402-1be1bf2f4286',
          name: 'Hungary',
          abbr: 'HU'
        },
        {
          id: 'c293a875-e0ed-4757-8334-504a599a0ed1',
          name: 'Ireland',
          abbr: 'IE'
        },
        {
          id: 'ab072b67-57ed-4c08-833b-0d0a96f0955f',
          name: 'Italy',
          abbr: 'IT'
        },
        {
          id: 'c4776de5-be94-420a-9d3f-5bd0909d9e1c',
          name: 'Latvia',
          abbr: 'LV'
        },
        {
          id: 'e5941db6-78b1-4a86-97eb-5dc74c73b617',
          name: 'Lithuania',
          abbr: 'LT'
        },
        {
          id: 'db3307c9-96e7-4bf8-aed4-1406e80d1db3',
          name: 'Luxembourg',
          abbr: 'LU'
        },
        {
          id: 'af0ce1a8-5d6a-408c-b868-1d10f7b3eda0',
          name: 'Malta',
          abbr: 'MT'
        },
        {
          id: '89e648a6-0f4b-48c3-91df-1ae519a8440f',
          name: 'Netherlands',
          abbr: 'NL'
        },
        {
          id: '7ba2b3f0-b0de-4a4a-81cc-7f19f46c094c',
          name: 'Poland',
          abbr: 'PL'
        },
        {
          id: '2a657928-779a-411a-b23f-f515757ffdd9',
          name: 'Portugal',
          abbr: 'PT'
        },
        {
          id: '04cd284b-e74f-4bff-82a3-05fc19518d79',
          name: 'Romania',
          abbr: 'RO'
        },
        {
          id: 'a8dd9d4d-015a-43d6-bb57-3be25cdeb230',
          name: 'Slovakia',
          abbr: 'SK'
        },
        {
          id: '8c73c5ad-5e42-47ee-875b-92c9f8635cc6',
          name: 'Slovenia',
          abbr: 'SI'
        },
        {
          id: '38346aff-6d7d-486b-a5d2-932581e3ad5f',
          name: 'Spain',
          abbr: 'ES'
        },
        {
          id: 'c059c561-5bad-4c2a-9be6-f7caf11e9df9',
          name: 'Sweden',
          abbr: 'SE'
        }
      ];
});


formApp.controller('postServiceCtrl', function($scope, $http) {

    $scope.submitForm = function() {
        // creating an object that will pass to the service

        // var data = $scope.user;
        // calling api
        // $http.post("https://api3-pegasi.uat.crowdstaffing.com/talents", JSON.stringify(data))
        //         .then(function(res) {
        //             console.log(res);
        //         })
        //         .then(function(res){
        //                 console.log(res);
        //             })
        //             .catch(function(err){
        //                 console.log(err);
        //             });
        $http({
            method: 'POST',
            url: 'https://api3-pegasi.uat.crowdstaffing.com/talents',
            data: $scope.user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        })
        .then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        });
    }
});