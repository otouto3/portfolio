<template>
  <div class="about">
    <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet">
    <h3> {{ name }} </h3>
    <img src="@/assets/img/purin.png" />
    <div class="content" v-for="(content, index) in contents" :key=index>
      <p> {{ content.value }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      contents: [
        { value: 'こんにちは、おとうとです。'},
        { value: '情報系の大学3年生です。'},
        { value: '和菓子とかグミとかゼリーが好物です。'},
        { value: 'ポケモンやドラクエ、スマブラ、スプラも好き。'},
        { value: 'ポケモンは前作でダブルレート4位だったので、新作では1位を取りたいです。'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/_size.scss';

* {
  padding: 0;
  margin: 0;
}


.about {
  font-family: "M PLUS 1p";
  display: block; //親要素と同じまでクリックの範囲を広げる
  width: 100%;
  height: 100%;
  text-align: center;
  .content{
    color: black;
  }


}

//PC用
@media screen and (min-width: 770px) { /*ウィンドウ幅が767px以上の場合に適用*/

  .about {
    //padding-top: 50px;
    //height: 100%;
    //display: flex;
    //justify-content: center;
    .content {
      p {
        font-size: 20px;
        }
      }
    }


}

@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/

  .about {
    .content{
      p {
        font-size: 16px
      }
    }
  }

}

</style>