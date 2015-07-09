/**
 * Created by alberto on 6/7/15.
 */
angular.module('services').controller('ContactsController', TasksListController);

function TasksListController($scope, tasksService) {
  $scope.search = {};
  $scope.taskslist = tasksService.tasks;
}