new Vue {
  el: "#app",
  data: {
    message: "おはよう",
    counter: 0
  }
  methods: {
    increase: function() {
      this.counter +=1;
    }
  }
}
