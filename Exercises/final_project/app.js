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
    .state('agendas.single', {
      url: '/:id',
      templateUrl: 'templates/simpleAgenda.html',
      controller: 'SingleAgendaController'
    })
    .state('contacts', {
      url: '/contacts',
      templateUrl: 'templates/contacts.html',
      controller: 'ContactsController'
    })
    .state('contacts.single', {
      url: '/:id',
      templateUrl: 'templates/simpleContact.html',
      controller: 'SingleContactController'
    })
    .state('login', {
      url:'/login',
      templateUrl:'templates/login.html',
      controller: 'AuthController'
    });
  $urlRouterProvider.otherwise('/login');
}
