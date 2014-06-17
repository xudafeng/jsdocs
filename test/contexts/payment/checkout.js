module.exports = {
  __requires: [
    '../global',
    '../user'
  ],
  viewChannelVisibilityUtil: {
    getRecommendChannelList: function () {
      return [
        { paymentMethod: 'QW_EBANK' },
        { paymentMethod: 'MIXEDCARD' },
        { paymentMethod: 'WM_EBANK' }
      ]
    }
  },
  subOrderList: [
    {
      title: 'order infomation 1',
      orderAmount: '200'
    },
    {
      title: 'order infomation 2',
      orderAmount: '200'
    },
    {
      title: 'order infomation 3',
      orderAmount: '200'
    }
  ],
  totalOrderAmount: '100',
  subTotalOrderAmount: '200',
  shippingAmount: '100',
  aliexpressCreditAmount: '200',
  moneyFormatter: {
    format: function (elem) {
      return '$' + elem
    }
  },
  paymentViewModel: {
    defaultChannel: 'MIXEDCARD',
    alipayWalletAccount: 'zm@alipay.com'
  },
  payOrder: {
    orderId: ''
  },
  xxxxxxxxxxxxxxxx: '',
  yy: '',
  wo: '',
  wo44: ''
}
