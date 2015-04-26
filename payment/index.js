'use strict'

import angular from 'angular'
import Payment from './payment'

export default angular.module('payment.model', [])
  .factory('Payment', Payment)
  .name
