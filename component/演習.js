Vue.component("hello-w", {
  template: "<p>Hello World!</p>"
});

new Vue({
  el: "#app",
  data: {
    toggle: true,
    message: "Hello World!",
    url: "https://jp.vuejs.org/",
    languages: {
      Js: "JavaScript",
      Rb: "Ruby",
      Py: "Python"
    }
  },
  methods: {
    popUp: function() {
      this.message = "Clicked!";
    }
  }
});
