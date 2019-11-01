<template>
  <div class="contact">
    <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet">
    <h1>Contact</h1>
    <div class="content" v-for="(content, index) in contents" :key=index>
      <p> {{ content.value }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      contents: [
        { value: 'otouto.contact[at]gmail.com'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/_size.scss';

* {
  margin: 0;
}


.contact {
  font-family: "M PLUS 1p";
  padding-top: 50px;
  text-align: center;

  .content{
    color: black;
    padding: 0.5em 1em;
    margin: 1em 0;
    font-weight: bold;
    background: #FFF;
    border: solid 3px black;/*線*/
    border-radius: 10px;/*角の丸み*/
    p {
      margin: 0;
      padding: 0;
    }
  }

}

//PC用
@media screen and (min-width: 769px) { /*ウィンドウ幅が768px以上の場合に適用*/

  .contact {
    .content {
      p {
        font-size: 20px;
        }
      }
    }

}

//タブレット用
@media screen and (max-width: 768px) { /*ウィンドウ幅が最大768pxまでの場合に適用*/

  .contact {
    .content {
      p {
        font-size: 18px;
        }
      }
    }

}


@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/

  .contact {
    .content{
      p {
        font-size: 16px
      }
    }
  }

}

</style>>