var app = new Vue({
  el: "#app",
  data: {
    items: null,
    keyword: "",
    message: ""
  },
  watch: {
    keyword: function(newKeyword, oldkeyword) {
      // console.log(newKeyword);
      this.message = "ちょっとまつがよい";
      this.debouncedGetAnswer();
    }
  },
  methods: {
    getAnswer: function() {
      if (this.keyword === "") {
        this.items = null;
        this.message = "";
        return;
      }
      this.message = "Loading...";
      let vm = this;
      let params = { page: 1, per_page: 20, query: this.keyword };
      axios
        .get("https://qiita.com/api/v2/items", { params })
        .then(function(response) {
          console.log(response);
          vm.items = response.data;
        })
        .catch(function(error) {
          vm.message = "Error!" + error;
        })
        .finally(function(error) {
          vm.message = "";
        });
    }
  },
  created: function() {
    // this.keyword = "javaScript";
    // this.getAnswer();
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
  }
});
