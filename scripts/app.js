angular.module("firstApp", ['ui.router'])
    .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('todo', {
            url: '/',
            templateUrl: 'views/todo.html',
            controller:"Todoctl"
        })
    }])
