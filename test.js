'use strict'

import test from 'ava'
import m from './'

test(t => {
  t.true(m('I have USD300'))
  t.truthy(m('I have USD300', { toObject: true }))
  t.false(m('I do not have money', { toObject: true }))
  t.false(m('I do not have money'))
})
