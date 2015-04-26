'use strict'

import angular from 'angular'
import 'angular-mocks'
import assert from 'assert'
import {stub} from 'sinon'
import sinonAsPromised from 'sinon-as-promised'
import paymentModule from './'

describe('Payment', () => {
  let Payment, payment
  beforeEach(angular.mock.module(paymentModule))
  beforeEach(angular.mock.module(($provide) => {
    $provide.factory('stripe', ($q) => {
      sinonAsPromised($q)
      return {
        card: {
          createToken: stub()
        }
      }
    })
  }))
  beforeEach(angular.mock.inject((_Payment_) => {
    Payment = _Payment_
    payment = new Payment()
  }))

  describe('Constructor', () => {
    it('applies defaults', () => {
      assert.equal(payment.currency, 'usd')
    })
    it('applies attributes', () => {
      assert.equal(new Payment({currency: 'gbp'}).currency, 'gbp')
    })
  })

  describe('tokenize', () => {
    it('assigns the token from stripe', angular.mock.inject((stripe, $timeout) => {
      payment.card = {}
      stripe.card.createToken.withArgs(payment.card).resolves({
        id: 'thetoken'
      })
      payment.tokenize()
      $timeout.flush()
      assert.equal(payment.source, 'thetoken')
    }))
  })

  describe('charge', () => {
    it('posts the payment without the card', angular.mock.inject(($httpBackend) => {
      $httpBackend
        .expectPOST('/payments', (data) => {
          data = JSON.parse(data)
          assert.equal(typeof data.card, 'undefined')
          assert.equal(data.amount, 100)
          return true
        })
        .respond(200)
      payment.card = {}
      payment.charge()
      $httpBackend.flush()
      assert(payment.card)
    }))
  })
})
