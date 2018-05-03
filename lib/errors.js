'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on zcore-payment-protocol Module: {0}'
};

module.exports = require('zcore-lib').errors.extend(spec);
