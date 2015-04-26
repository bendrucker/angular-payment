'use strict'

import {annotate} from 'angular-annotation-decorator'

@annotate('Payment')
class PaymentController {
  constructor (Payment) {
    this.charge = (card) => {
      return Payment.create(card)
    }
  }
}
export default PaymentController
