'use strict'

import clone from 'clone'

export default factory

const defaults = {
  amount: 100,
  currency: 'usd'
}

factory.$inject = ['$http', 'stripe']
function factory ($http, stripe) {
  return class Payment {
    constructor (attributes) {
      Object.assign(this, defaults, attributes)
    }
    tokenize () {
      return stripe.card.createToken(this.card)
        .then((token) => {
          return Object.assign(this, {
            source: token.id
          })
        })
    }
    charge () {
      const payment = clone(this)
      delete payment.card
      return $http.post('/payments', payment)
    }
  }
}
