'use strict'

import {annotate} from 'angular-annotation-decorator'

@annotate('$scope', 'Payment')
class PaymentController {
  constructor ($scope, Payment) {
    $scope.payment = new Payment()
    $scope.charge = (payment) => {
      return payment.tokenize()
        .then(() => {
          return payment.charge()
        })
    }
  }
}
export default PaymentController
