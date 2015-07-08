angular.module('services').factory('contactsService', contactsService);

function contactsService($http, $q, AuthService) {
  var SERVER_URL = 'http://localhost:8080/';

  function getTasks() {
    var q = $q.defer();

    if(AuthService.user) {
      console.log(AuthService.getUser());
      $http.get(SERVER_URL + 'user/' + AuthService.getUser().user._id + '/task').then(function(data){
        q.resolve(data);
      }, function(){
        q.reject();
      });
    } else {
      q.reject();
    }
    return q.promise;
  }

  function addContact(newContact) {
    var q = $q.defer();
    $http.post(SERVER_URL + 'contacts/', newContact).then(function(data){
      q.resolve(data)
    }, function(){
      q.reject(data);
    });
    return q.promise;
  }

  function removeTask(id) {
    var q = $q.defer();
    $http.delete(SERVER_URL + id).then(function(data){
      q.resolve(data);
    }, function(data) {
      q.reject(data);
    });
    return q.promise;
  }

  return {
    getTasks: getTasks,
    addTask: addContact,
    removeTask: removeTask
  }
}
