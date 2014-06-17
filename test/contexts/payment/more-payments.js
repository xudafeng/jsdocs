module.exports = {
  __requires: [
    '../global'
  ],
  viewChannelVisibilityUtil: {
    canViewGlobalChannel: function () {
      return true
    },
    getGlobalChannelList: function () {
      return [
        { paymentMethod: 'visa' },
        { paymentMethod: 'western union' },
        { paymentMethod: 'bank transfer' }
      ]
    },
    canViewEastEuropeChannel: function () {
      return true
    },
    getEastEuropeChannelList: function () {
      return [
        { paymentMethod: 'QIWI' },
        { paymentMethod: 'webmoney' }
      ]
    },
    canViewUSAChannel: function () {
      return true
    },
    getUSAChannelList: function () {
      return [
        { paymentMethod: 'BOLETO' }
      ]
    }
  },
  paymentViewModel: {
    defaultChannel: 'MIXEDCARD',
    alipayWalletAccount: 'zm@alipay.com'
  }
}
