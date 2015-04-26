'use strict'

import angular from 'angular'
import stripe from '../stripe'
import Payment from './payment'

export default angular.module('payment.model', [
  stripe
])
.factory('Payment', Payment)
.name
