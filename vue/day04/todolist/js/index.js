function getStore() {
  return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
}


new Vue({
  el: '#app',
  data: {
    type: 'all',
    todos: getStore(),
    edit_mask_flag: false,
    val: "", //它是编辑的input的value
    tabBars: [{
      id: 1,
      options: '全部',
      type: 'all',
      style: 'button-warning'
    }, {
      id: 2,
      options: '未完成',
      type: 'unFinish',
      style: 'button-danger'
    }, {
      id: 3,
      options: '已完成',
      type: 'finished',
      style: 'button-success'
    }]
  },
  methods: {
    openEditMaskFlag() {
      this.edit_mask_flag = true
    },
    closeEditMaskFlag() {
      this.edit_mask_flag = false
    },
    editConfirm() {
      this.todos.unshift({
        id: this.todos.length + 1,
        task: this.val,
        flag: false
      })
      this.closeEditMaskFlag()
      this.val = ''
      this.setStore()
    },
    changFlag(index) {
      this.todos[index].flag = !this.todos[index].flag
      this.setStore()
    },
    remove(index) {
      this.todos.splice(index, 1)
      this.setStore()
    },
    changeType(type) {
      this.type = type
    },
    setStore() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  },
  computed: {
    newTodos() {
      switch (this.type) {
        case 'all':
          return this.todos
          break;
        case 'finished':
          return this.todos.filter(item => item.flag)
          break;
        case 'unFinish':
          return this.todos.filter(item => !item.flag)
          break;
        default:
          return this.todos
          break;
      }
    }
  }
})