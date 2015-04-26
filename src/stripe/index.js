'use strict'

import angular from 'angular'
import './mock'
import stripe from 'angular-stripe'

export default angular.module('payment.stripe', [
  stripe
])
.name
