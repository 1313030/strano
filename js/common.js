var container01 = new Swiper(".container01", {
    loop: true, // ループ
    speed: 1500, // 少しゆっくり(デフォルトは300)
    autoplay: { // 自動再生
      delay: 1000, // 2秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var container02 = new Swiper(".container02", {
    loop: true, // ループ
    speed: 1500, // 少しゆっくり(デフォルトは300)
    autoplay: { // 自動再生
      delay: 1000, // 2秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  jQuery('#wrapper').raindrops(//指定したエリアに描画
  {
  color:'#504339',//水の色を指定
  canvasHeight:100, //canvasの高さを指定。初期値は親の高さの50%。
  waveLength: 50,//波の長さ(広がり)を指定。数値が大きいほど長さは小さくなる。初期値は340。
  waveHeight:50,//波の高さを指定。数値が大きいほど高さは高くなる。初期値は100。
  rippleSpeed: 0.01, //波紋のスピードを指定。数値が大きいほど波紋は速くなる。初期値は0.1。
  density: 0,//水の波紋の量を指定。数値が大きいほど波紋は小さくなる。初期値は0.02。
  frequency:3//雨粒の落ちる頻度を指定。数値が大きいほど頻度は多くなる。初期値は3。
  }
  );

  
  



