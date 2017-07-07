'use strict'

const findCurrencyCode = require('find-currency-code')

module.exports = (str, { toObject = false } = {}) => {
  if (typeof str === 'string') {
    const currency = findCurrencyCode(str)

    if (currency) {
      const formatted = toObject ? { currency } : true
      return formatted
    }

    return false
  }

  return false
}
