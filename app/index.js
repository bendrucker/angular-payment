'use strict'

import angular from 'angular'
import backend from './backend'
import stripe from './stripe'
import Payment from './payment'

export default angular.module('payment', [
  backend,
  stripe
])
.factory('Payment', Payment)
.name
