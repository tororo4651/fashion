// SCSSファイルの読み込み
import '../scss/style.scss';




// jQuery

// import $ from 'jquery';

// $('.topSection01__text').css('background-color', '#ed8');




// ローディング
// const loading = document.querySelector('.loading');
// const loadingText = document.querySelector('.loading__text');
// const loadingScreen = document.querySelector('.loading__screen');


// window.addEventListener('load', (e) => {
//   // テキスト
//   loadingText.animate(
//     [
//       {
//         offset: .8,
//         opacity: 1
//       },
//       {
//         offset: 1,
//         opacity: 0
//       }
//     ],
//     {
//       duration: 1200,
//       easing: 'ease',
//       fill: 'forwards'
//     }
//   );


//   // ローディング画面
//   loading.animate(
//     {
//       opacity: [1, 0],
//       visibility: 'hidden'
//         or
//       backgroundColor: ['rgb(238 238 238 / 1)', 'rgb(238 238 238 / 0)']
//       backdropFilter: ['blur(10px)', 'blur(0)']
//     },
//     {
//       duration: 2000,
//       delay: 1200,
//       easing: 'ease',
//       fill: 'forwards'
//     }
//   );


//   // 水色のスクリーン
//   loadingScreen.animate(
//     {
//       translate: ['0 100%', '0 -100%']
//     },
//     {
//       duration: 2000,
//       delay: 800,
//       easing: 'ease',
//       fill: 'forwards'
//     }
//   );

// }, false);






// グローバルナビゲーションの開閉
// const openGnavBtn = document.querySelector('.gNavBtn--open');
// const closeGnavBtn = document.querySelector('.gNavBtn--close');
// const gNav = document.querySelector('.gNav');
// const gNavItems = document.querySelectorAll('.gNav__item');


// グローバルナビゲーションを開く
// openGnavBtn.addEventListener('click', (e) => {

//   gNav.animate(
//     {
//       translate: ['100vw', 0]
//     },
//     {
//       duration: 1400,
//       easing: 'ease',
//       fill: 'forwards'
//     }
//   );

//   gNavItems.forEach((gNavItem, index) => {
//     gNavItem.animate(
//       {
//         opacity: [0, 1],
//         translate: ['2rem', 0]
//       },
//       {
//         duration: 2400,
//         delay: index * 300,
//         easing: 'ease',
//         fill: 'forwards'
//       }
//     );
//   });

// }, false);


// グローバルナビゲーションを閉じる
// closeGnavBtn.addEventListener('click', (e) => {

//   gNav.animate(
//     {
//       translate: [0, '100vw']
//     },
//     {
//       duration: 1400,
//       easing: 'ease',
//       fill: 'forwards'
//     }
//   );

//   for (let i = 0; i < gNavItems.length; i++) {
//     gNavItems[i].animate(
//       {
//         opacity: [1, 0]
//       },
//       {
//         duration: 1400,
//         easing: 'ease',
//         fill: 'forwards'
//       }
//     );
//   }

// }, false);



// CSS でアニメーション
// gNavOpenBtn.addEventListener('click', (e) => {
//   document.documentElement.classList.add('is-gNavOpen');
// }, false);
  // toggle でも可。


// gNavCloseBtn.addEventListener('click', (e) => {
//   document.documentElement.classList.remove('is-gNavOpen');
// }, false);
  // toggle でも可。


// .gNav {
//   position: fixed;
//   inset: 0 0 0 auto;
//   z-index: 2;
//   width: max(32vw, 20rem);
//   background-color: g.$mainColor;
//   box-shadow: 0 0 2rem g.$mainColor;
//   translate: 100vw;
//   transition: translate 1.4s;

//   .is-gNavOpen & {
//     translate: 0;
//   }

//   &__item {
//     font-family: g.$OswaldFont;
//     font-size: 2rem;
//     opacity: 0;
//     translate: 2rem;

//     &:first-child {
//       transition: 2.4s;
//     }

//     &:nth-child(2) {
//       transition: 2.4s 0.3s;
//     }

//     &:nth-child(3) {
//       transition: 2.4s 0.6s;
//     }

//     &:nth-child(4) {
//       transition: 2.4s 0.9s;
//     }

//     &:nth-child(5) {
//       transition: 2.4s 1.2s;
//     }

//     .is-gNavOpen & {
//       opacity: 1;
//       translate: 0;
//     }
//   }
// }






// Lookbook のサムネイル表示
// const photos = [
//   {
//     src: 'img1.jpg'
//   },
//   {
//     src: 'img2.jpg'
//   },
//   {
//     src: 'img3.jpg'
//   },
//   {
//     src: 'img4.jpg'
//   },
//   {
//     src: 'img5.jpg'
//   },
//   {
//     src: 'img6.jpg'
//   },
//   {
//     src: 'img7.jpg'
//   },
//   {
//     src: 'img8.jpg'
//   },
//   {
//     src: 'img9.jpg'
//   }
// ];

// const topSection02Thumbnails = document.querySelector('.topSection02__thumbnails');

// photos.forEach((photo, index, array) => {
//   const { src } = photo;

//   const content =
//    `<li class="topSection02__thumbnail js-fadeUp">
//       <img class="topSection02__thumbnailImage" src="/images/${src}" alt="写真：概要" width="900" height="1200">
//     </li>`;

//   topSection02Thumbnails.insertAdjacentHTML('beforeend', content);

//   const topSection02ThumbnailEls = document.querySelectorAll('.topSection02__thumbnail');

//   topSection02ThumbnailEls[index].animate(
//     {
//       opacity: [0, 1]
//     },
//     {
//       duration: 1000,
//       delay: index * 300,
//       easing: 'ease',
//       fill: 'forwards'
//     }
//   );
// });






// Lookbook のサムネイル拡大表示
// const thumbnailImages = document.querySelectorAll('.topSection02__thumbnailImage');
// const mainImage = document.querySelector('.topSection02__image');


// 書き方１
// thumbnailImages.forEach((thumbnailImage, index) => {
//   thumbnailImage.addEventListener('mouseover', (e) => {
//     mainImage.src = e.target.src;

//     mainImage.animate(
//       {
//         opacity: [0, 1]
//       },
//       500
//     );
//   }, false);
// });


// 書き方２
// for (let i = 0; i < thumbnailImages.length; i++) {
//   thumbnailImages[i].addEventListener('mouseover', function() {
//     mainImage.src  = this.src;

//     mainImage.animate(
//       {
//         opacity: [0, 1]
//       },
//       500
//     );
//   }, false);
// }






// フェードアップ
// const fadeUp = (entries, obs) => {
//   for (let i = 0; i < entries.length; i++) {
//     if (entries[i].isIntersecting) {
//       entries[i].target.animate(
//         {
//           opacity: [0, 1],
//           translate: ['0 4rem', 0],
//           filter: ['blur(.4rem)', 'blur(0)']
//         },
//         {
//           duration: 2000,
//           easing: 'ease'
//         }
//       );

//       obs.unobserve(entries[i].target);
//     }
//   }
// };

    // or

// // const fadeUp = (entries, obs) => {
// //   entries.forEach((entry) => {
// //     if (entry.isIntersecting) {
// //       entry.target.animate(
// //         {
// //           opacity: [0, 1],
// //           translate: ['0 4rem', 0],
// //           filter: ['blur(.4rem)', 'blur(0)']
// //         },
// //         {
// //           duration: 2000,
// //           easing: 'ease'
// //         }
// //       );

// //       obs.unobserve(entry.target);
// //     }
// //   });
// // };

// const fadeUpObserver = new IntersectionObserver(fadeUp);

// const fadeUpElements = document.querySelectorAll('.js-fadeUp');

// // fadeUpElements.forEach((fadeUpElement, index) => {
// //   fadeUpObserver.observe(fadeUpElement);
// // });

    // or

// for (let i = 0; i < fadeUpElements.length; i++) {
//   fadeUpObserver.observe(fadeUpElements[i]);
// }








// 擬似要素のスライドライト
// const slideRight = (entries, obs) => {
//   for (let i = 0; i < entries.length; i++) {
//     if (entries[i].isIntersecting) {
//       entries[i].target.animate(
//         {
//           translate: ['-100%', 0]
//         },
//         {
//           duration: 1200,
//           easing: 'ease',
//           pseudoElement: '::before'
//         }
//       );

//       obs.unobserve(entries[i].target);
//     }
//   }
// };


// const slideRightObserver = new IntersectionObserver(slideRight);


// const slideRightEls = document.querySelectorAll('.js-slideRight');

// for (let i = 0; i < slideRightEls.length; i++) {
//   slideRightObserver.observe(slideRightEls[i]);
// }
