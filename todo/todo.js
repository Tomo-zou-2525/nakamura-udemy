new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: []
  },
  methods: {
    addTodo: function(event) {
      // alert("うほうほ");
      let todo = {
        item: this.newItem
      };
      this.todos.push(todo);
    }
  }
});
