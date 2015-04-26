'use strict'

import angular from 'angular'
import formState from 'angular-form-state'
import creditCards from 'angular-credit-cards'
import backend from './backend'
import stripe from './stripe'
import Payment from './payment'

export default angular.module('payment', [
  formState,
  creditCards,
  backend,
  stripe
])
.factory('Payment', Payment)
.name
