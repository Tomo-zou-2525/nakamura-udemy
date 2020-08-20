new Vue({
  el: "#app",
  data: {
    message: "hello Vue.js"
  },
  methods: {
    changeText: function(event) {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
