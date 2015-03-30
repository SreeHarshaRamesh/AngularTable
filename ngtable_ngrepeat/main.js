
// main.js
var app = angular.module('myApp',[]);
app.controller('MyCtrl', function($scope) {
  $scope.filter_leads = {};
  $scope.filter_leads.group_1 = 'date';
  $scope.colNames = ['Date','Inventory','Model','City',
  'Total Leads','Total Sales','Total Cash','Average Discount'];
  $scope.leads = [{
  date: '2013-09-20',
  inventory: 'Suzuki',
  model: 'Swift',
  City: 'Bangalore',
  total_leads: 4,
  total_sales: 2,
  total_cash: 289000,
  discount: 20000
},
{
  date: '2013-09-27',
  inventory: 'Tata',
  model: 'Nano',
  City: 'Bangalore',
  total_leads: 1,
  total_sales: 3,
  total_cash: 189000,
  discount: 14000
},
{
  date: '2013-09-27',
  inventory: 'Tata',
  model: 'Indica',
  City: 'Chennai',
  total_leads: 7,
  total_sales: 3,
  total_cash: 381000,
  discount: 14000
},
{
  date: '2013-09-27',
  inventory: 'Tata',
  model: 'Vista',
  City: 'Mumbai',
  total_leads: 3,
  total_sales: 1,
  total_cash: 181000,
  discount: 14000
},
{
  date: '2013-09-27',
  inventory: 'Tata',
  model: 'Vista',
  City: 'New Delhi',
  total_leads: 1,
  total_sales: 1,
  total_cash: 72000,
  discount: 9000
},
{
  date: '2013-09-27',
  inventory: 'Tata',
  model: 'Vista',
  City: 'Hyderabad',
  total_leads: 1,
  total_sales: 0,
  total_cash: 0,
  discount: 0
},
{
  date: '2013-11-13',
  inventory: 'Hyundai',
  model: 'Eon',
  City: 'Chennai',
  total_leads: 7,
  total_sales: 4,
  total_cash: 442000,
  discount: 14000
},
{
  date: '2013-11-13',
  inventory: 'Hyundai',
  model: 'Eon',
  City: 'Secunderabad',
  total_leads: 1,
  total_sales: 1,
  total_cash: 92000,
  discount: 7000
}
];

  $scope.$watch('filter_leads.group_1', function (group) {
    $scope.groupedLeads = _.groupBy($scope.leads, group);
  });
});
/*app.controller('MyCtrl', function($scope) {
  $scope.players = [
  {name: 'Gene', team: 'alpha'},
  {name: 'George', team: 'beta'},
  {name: 'Steve', team: 'gamma'},
  {name: 'Paula', team: 'beta'},
  {name: 'Scruath', team: 'gamma'}
];

    $scope.myLeads = [{
  date: '2013-09-20',
  inventory: 'Suzuki',
  model: 'Swift',
  City: 'Bangalore',
  total_leads: 4,
  total_sales: 2,
  total_cash: 289000,
  discount: 20000
},
{
  date: '2013-09-27',
  inventory: 'Tata',
  model: 'Nano',
  City: 'Bangalore',
  total_leads: 1,
  total_sales: 3,
  total_cash: 189000,
  discount: 14000
},
{
  date: '2013-09-27',
  inventory: 'Tata',
  model: 'Indica',
  City: 'Chennai',
  total_leads: 7,
  total_sales: 3,
  total_cash: 381000,
  discount: 14000
},
{
  date: '2013-09-27',
  inventory: 'Tata',
  model: 'Vista',
  City: 'Mumbai',
  total_leads: 3,
  total_sales: 1,
  total_cash: 181000,
  discount: 14000
},
{
  date: '2013-09-27',
  inventory: 'Tata',
  model: 'Vista',
  City: 'New Delhi',
  total_leads: 1,
  total_sales: 1,
  total_cash: 72000,
  discount: 9000
},
{
  date: '2013-09-27',
  inventory: 'Tata',
  model: 'Vista',
  City: 'Hyderabad',
  total_leads: 1,
  total_sales: 0,
  total_cash: 0,
  discount: 0
},
{
  date: '2013-11-13',
  inventory: 'Hyundai',
  model: 'Eon',
  City: 'Chennai',
  total_leads: 7,
  total_sales: 4,
  total_cash: 442000,
  discount: 14000
},
{
  date: '2013-11-13',
  inventory: 'Hyundai',
  model: 'Eon',
  City: 'Secunderabad',
  total_leads: 1,
  total_sales: 1,
  total_cash: 92000,
  discount: 7000
}
];*//*$http.get('leads.json').then(function(response){
  $scope.myData = response.data.leads;
});console.log(myData);
    /*$scope.gridOptions = { 
        data: 'myData',
        columnDefs: [
      {field:'date', displayName:'Date'},
      {field:'inventory', displayName:'Inventory'},
      {field:'model', displayName:'Model'},
      {field:'City', displayName:'City'},
      {field:'total_leads', displayName:'Total Leads'},
      {field:'total_sales', displayName:'Total Sales'},
      {field:'total_cash', displayName:'Total Cash'},
      {field:'discount', displayName:'Average Discount'}
    ]
        
        
    };
});*/

/*app.factory('leadsFactory', function($http) {
  // Assignment is a class which we can use for retrieving and 
  // updating data on the server
  var Assignment1 = function(data) {
    angular.extend(this, data);
  };

  // a static method to retrieve Assignment
  Assignment1.get = function() {
    return $http.get('data-assignments.txt').then(function(response) {
      return new Assignment1(response.data);
    });
  };
  return Assignment1;
});*/