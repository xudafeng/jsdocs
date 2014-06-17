module.exports = {
  __debug: true,

  assetsServer: {
    getURI: function() { return '' }
  },

  dateTool: {
    getYear: function() {
      return (new Date).getFullYear()
    }
  },

  stringUtil: {
    equals: function(a, b) {
      return a === b
    },
    contains: function(a, b) {
      return a.indexOf(b) !== -1
    },
    isNotBlank: function(a) {
      return typeof a === 'string' && a
    },
    trim: function(a) {
      // TODO
      return a
    },
    isBlank: function(a) {
      return a.length === 0
    },
    defaultIfNull: function(a) {
      return a || ''
    },
    indexOf: function(str, substr) {
      return str.indexOf(substr)
    },
    isEmpty: function(a) {
      if (!a) {
        return true
      }
      return a.length === 0
    },
    substring: function (str, start, end) {
      return str.substring(start, end)
    },
    right: function(str) {
      if (!str) {
        return ''
      }
      if (str.length <= 4) {
        return str
      }
      return str.substring(str.length - 4, str.length)
    }
  }
}
