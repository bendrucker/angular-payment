'use strict'

import angular from 'angular'

import backend from './backend'
import stripe from './stripe'
import form from './form'
import payment from './payment'

export default angular.module('payment', [
  backend,
  stripe,
  form,
  payment
])
.name
