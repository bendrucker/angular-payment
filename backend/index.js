'use strict'

import angular from 'angular'
import ngMockE2E from 'angular-mocks/ngMockE2E'

let status

export default angular.module('payment.backend', [
  ngMockE2E
])
.value('backend', {
  succeeds () {
    status = 200
  }
  fails () {
    status = 402
  }
})
.run(server)
.name

server.$inject = ['$httpBackend']
function server ($httpBackend) {
  $httpBackend.whenPOST('/payments').respond(() => {
    return [status]
  })
}
