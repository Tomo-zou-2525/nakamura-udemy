new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: []
  },
  methods: {
    addTodo: function(event) {
      // alert("うほうほ");
      if (this.newItem == "") return; //空文字のヴァリデーション
      let todo = {
        item: this.newItem,
        isDone: false
      };
      this.todos.push(todo);
      this.newItem = "";
    },
    deleteTodo: function(index) {
      alert("消しまっせ", index);
      this.todos.splice(index, 1);
    }
  }
});
