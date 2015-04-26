'use strict'

import {annotate} from 'angular-annotation-decorator'

@annotate('$httpBackend')
class Backend {
  constructor ($httpBackend) {
    $httpBackend.whenPOST('/payments').respond(() => {
      return [this.status]
    })
  }
  succeeds () {
    this.status = 200
  }
  fails () {
    this.status = 402
  }
}

export default Backend
