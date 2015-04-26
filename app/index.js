'use strict'

import angular from 'angular'
import backend from './backend'
import stripe from './stripe'

export default angular.module('payment', [
  backend,
  stripe
])
.name
