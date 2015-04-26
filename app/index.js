'use strict'

import angular from 'angular'

import backend from './backend'
import stripe from './stripe'
import form from './form'
import Payment from './payment'

export default angular.module('payment', [
  backend,
  stripe,
  form
])
.factory('Payment', Payment)
.name
