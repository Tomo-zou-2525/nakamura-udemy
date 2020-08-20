new Vue({
  el: "#app",
  data: {
    basePrice: 100 //本体価格を定義
  },
  computed: {
    //算出プロパティの定義
    taxIncludedPrice: {
      get: function() {
        return parseInt(this.basePrice * 1.08);
      }, //parseIntは整数を返す関数
      set: function(taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08);
      } //Math.ceilは小数点以下を返す関数
    }
  }
});

//ゲッターセッターの定義について

// taxIncludedPrice: {get: function() {return this.basePrice * 1.08;},set: function(taxIncludedPrice) {this.basePrice = taxIncludedPrice / 1.08}}}});
