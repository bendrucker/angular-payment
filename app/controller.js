'use strict'

export default PaymentController

PaymentController.$inject = ['$scope', 'Payment']
function PaymentController ($scope, Payment) {
  $scope.charge = (payment) => {
    return Payment.create(payment)
  }
}
