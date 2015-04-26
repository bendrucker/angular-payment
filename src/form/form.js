'use strict'

import template from './form.html'
import controller from './controller'

export default () => {
  return {
    restrict: 'E',
    controller,
    template
  }
}
