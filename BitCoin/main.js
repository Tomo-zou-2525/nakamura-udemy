new Vue({
  el: "#app",
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(
        function(response) {
          // console.log(response.data.bpi);
          // console.log(response.data.bpi.USD.rate_float);
          this.bpi = response.data.bpi;
          console.log(this); //thisの値がVueかWindowに切り替わる
        }.bind(this) //←この記述がくそ大事
      )
      .catch(
        function(error) {
          console.log(error);
          this.hasError = true;
        }.bind(this)
      );
  },
  filters: {
    currentDecimal(value) {
      return value.toFixed(2);
    }
  } //小数点切り上げのコード
});
