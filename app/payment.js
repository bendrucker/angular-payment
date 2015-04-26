'use strict'

export default factory

factory.$inject = ['$http']
function factory ($http) {
  return {
    create (data) {
      return $http.post('/payments', data)
    }
  }
}
