<template>
  <div class="gradation">
    <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet">
    <!---
    <link href="https://fonts.googleapis.com/earlyaccess/nikukyu.css" rel="stylesheet">
    --->
    <h1 class="fadeInDown flip">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'GradationFont',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/_size.scss';

.garadation {
  position: relative;
}

h1 {
  color: #ACB6E5; /*非対応のブラウザでの文字色を設定 */
  //font: bold 5em / 1 Verdana, Helvetica, Arial, sans-serif;
  font-family: "Nico Moji";
  //font-family: "Nikukyu";

  background: -webkit-linear-gradient(0deg, #ACB6E5, #86FDE8); /*背景色にグラデーションを指定*/
  -webkit-background-clip: text; /*テキストでくり抜く*/
  -webkit-text-fill-color: transparent; /*くり抜いた部分は背景を表示*/
  animation-duration: 2s;
  text-align: center;

}

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 0%, 0);
    transform: translate3d(0, 0%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

//PC用
@media screen and (min-width: 770px) { /*ウィンドウ幅が767px以上の場合に適用*/
  h1 {
    font-size: 125px;
    line-height:300px;
  }
}

//タブレット用
@media screen and (max-width: 768px) { /*ウィンドウ幅が最大767pxまでの場合に適用*/
 h1 {
   font-size: 80px;
   line-height: 200px;
  }
}

//スマホ用
@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/
 h1 {
     font-size: 40px;
     line-height: 150px;
  }
}

</style>
