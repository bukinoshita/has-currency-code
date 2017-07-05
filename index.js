'use strict'

const isCurrencyCode = require('is-currency-code')
const findCurrencyCode = require('find-currency-code')

module.exports = (str, { toObject = false } = {}) => {
  if (typeof str === 'string') {
    const validateCurrency = isCurrencyCode(findCurrencyCode(str))
    const currency = validateCurrency ? findCurrencyCode(str) : false

    if (currency) {
      const formatted = toObject ? { currency } : true
      return formatted
    }

    return false
  }

  return false
}
