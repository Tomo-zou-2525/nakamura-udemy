new Vue({
  el: "#app",
  data: {
    bpi: null, //APIから仮想通貨の値を取ってくるプロパティ
    hasError: false, //通信エラー時に文言を返すプロパティ
    loading: true //ロード中に画面表示させるプロパティ
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
          this.hasError = true; //通信エラーが起きたらイベント発火
        }.bind(this)
      )
      .finally(
        function() {
          this.loading = false;
        }.bind(this)
      );
  },
  filters: {
    currentDecimal(value) {
      return value.toFixed(2);
    }
  } //小数点切り上げのコード
});
