//! vue源码

function Vue (options) {
  this._init(options)
}


Vue.extend(opitions) = function VueComponent () {
  this._init(options)
}

Vue.prototype._init (options) {
  this.$on('aa',opitions.methods.aa)
}


new Vue({
  data: {},
  methods: {
    aa
  },
  computed: {},
  watch: {}
})