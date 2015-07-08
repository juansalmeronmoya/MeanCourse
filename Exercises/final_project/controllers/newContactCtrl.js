angular.module('services').controller('NewContactController', NewContactController);

function NewContactController($scope, contactsService) {

  $scope.createContact = function () {
    var newContact = {
      name: $scope.formData.name,
      surname: $scope.formData.surname,
      email: $scope.formData.email,
      phone: $scope.formData.phone
    };
    contactsService.addTask(newContact);

    $scope.contactForm.$setPristine();
  };
}
