angular.module('ColDevTest', [])
  .controller('PoolsController', PoolsController)
  .controller('BetsController', BetsController)

  .controller('BetController', ['$scope', function($scope) {
    $scope.bet = [];
    $scope.submit = function() {
      if ($scope.text) {
        $scope.bet.push(this.value);
        $scope.value = '';
      }
    };
  }]);


function BetsController() {
  this.bets =
    { stake: '', leg_1: '', leg_2: '', leg_3: '' };

  this.add = addBet;
  this.newBet = '' ;
  function addBet() {
    this.bets.push('');
    this.newBet.bet = '';
  }

}

function PoolsController() {
  this.all = [
    { name: 'Colossus',
      prize: '£10,000,000',
      start_time: '17:00',
      leg_1: 'Liverpool v Tottenham',
      leg_2: 'Wolves v Newcastle',
      leg_3: 'Fiorentina v Udinese',
      leg_4: 'Villarreal v Malaga',
      leg_5: 'Sassuolo v Chievo',
      leg_6: 'Las Palmas v Sevilla',
      leg_7: 'Eibar v Granada'
   }
  ];
}



// //get pools data from the API
// BetsController.$inject = ['$http'];
// function BetsController($http) {
//   var self = this;
//   self.all = [];
//
//   function getPools() {
//     $http
//       .get('https://colossusdevtest.herokuapp.com/api/pools.json')
//       .then(function(response) {
//         self.all = response.data.pools;
//       });
//   }
//   getPools();
// }
