'use strict'

import angular from 'angular'
import backend from './backend'
import stripe from './stripe'
import Payment from './payment'
import PaymentController from './controller'

export default angular.module('payment', [
  backend,
  stripe
])
.factory('Payment', Payment)
.controller('PaymentController', PaymentController)
.name
