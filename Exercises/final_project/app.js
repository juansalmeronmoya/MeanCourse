angular.module('services', ['ui.router', 'ngMessages']).config(Config);

function Config($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('newtask', {
      url: '/newtask',
      templateUrl: 'templates/newContact.html',
      controller: 'NewContactController'
    })
    .state('newagenda', {
      url: '/newagenda',
      templateUrl: 'templates/newAgenda.html',
      controller: 'NewAgendaController'
    })
    .state('agendas', {
      url: '/agendas',
      templateUrl: 'templates/agendas.html',
      controller: 'AgendasController'
    })
    .state('taskslist.single', {
      url: '/:id',
      templateUrl: 'templates/simpleContact.html',
      controller: 'SingleTaskController'
    })
    .state('login', {
      url:'/login',
      templateUrl:'templates/login.html',
      controller: 'AuthController'
    });
  $urlRouterProvider.otherwise('/login');
}
