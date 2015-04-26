'use strict'

import angular from 'angular'
import ngMockE2E from 'angular-mocks/ngMockE2E'
import Backend from './backend'

export default angular.module('payment.backend', [
  ngMockE2E
])
.service('backend', Backend)
.name
