// $(document).on(click, "#update", function() {
//   $("#message").text("jQuery");
// });

// $(document).on(click, "定義した関数", function() {
//   $("入れ替えたい対象元").text("入れ替えたい対象先")
// })

new Vue({
  el: "#app",
  data: {
    message: "World"
  },
  methods: {
    update() {
      this.message = "Vue.js";
    }
  }
});

// なぜupdateは関数なのか
// →html側で定義しているから

// なぜ八行目のmessageはthis.がつくのか
// →関数として、データを紐付ける必要があるから
