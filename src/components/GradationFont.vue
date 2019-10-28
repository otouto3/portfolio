<template>
  <div class="gradation">
    <p class="fadeInDown flip">{{ msg }}</p>
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

<style scoped>
p {
  color: #ACB6E5; /*非対応のブラウザでの文字色を設定 */
  font: bold 8em / 1 Verdana, Helvetica, Arial, sans-serif;
  background: -webkit-linear-gradient(0deg, #ACB6E5, #86FDE8); /*背景色にグラデーションを指定*/
  -webkit-background-clip: text; /*テキストでくり抜く*/
  -webkit-text-fill-color: transparent; /*くり抜いた部分は背景を表示*/
  /* animation: rainbow 1s linear ; */
  animation-duration: 2s;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
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


</style>