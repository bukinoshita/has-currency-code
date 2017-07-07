'use strict'

import test from 'ava'
import currenci from 'currenci'
import m from './'

test(t => {
  currenci.list.map(currency => t.true(m(`I have ${currency.code}300`)))
  currenci.list.map(currency =>
    t.truthy(m(`I have ${currency.code}300`, { toObject: true }))
  )
  t.false(m('I do not have money', { toObject: true }))
  t.false(m('I do not have money'))
})
