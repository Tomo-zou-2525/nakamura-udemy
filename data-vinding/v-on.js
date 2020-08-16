new Vue({
  el: "#app",
  data: {
    now: ""
  },
  methods: {
    o: function() {
      // alert("onclick");
      this.now = new Date().toLocaleString();
    }
  }
});
