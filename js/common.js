const container01 = new Swiper(".container01", {
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

  const container02 = new Swiper(".container02", {
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