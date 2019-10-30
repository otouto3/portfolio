<template>
  <header id="header">
    <nav>
      <ul class="header-nav">
        <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet">
        <li><router-link id="home-nav" to="/" exact>Home</router-link></li>
        <li><router-link id="about-nav" to="/about">About</router-link></li>
        <li><router-link id="works-nav" to="/works">Works</router-link></li>
        <li><router-link id="blog-nav" to="/blog">Blog</router-link></li>
        <li><router-link id="contact-nav" to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

@import '../assets/styles/_size.scss';

* {
  padding: 0;
  margin: 0;
}

.header-nav {
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  list-style: none;
  width: 100%;
  height: $header-height_pc;
  background-color: black;
  top: 0px;
  left: 0px;
  position: fixed;
  //box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  li {
    width: 100%;
    //margin-left: 36px;
    //border: 2px solid #555;
    display: block; //親要素と同じまでクリックの範囲を広げる
  }

  a {
    width: 100%;
    height: 100%;
    padding-top: 10px;
    display: block; //親要素と同じまでクリックの範囲を広げる
    text-decoration: none;
    text-align: center;
    color: white;
    font-family: "M PLUS 1p";
  }
}

//PC用
@media screen and (min-width: 770px) { /*ウィンドウ幅が767px以上の場合に適用*/

  a {
    &:hover{
      color:rgb(156, 160, 156)
    }
  }

}


/* タブレット */
@media screen and (max-width: 768px) { /*ウィンドウ幅が最大767pxまでの場合に適用*/
  a {
    width: 100%;
    height: $header-height_tablet;
    line-height: $header-height_tablet;

    &:active {
      color:rgb(156, 160, 156)
    }
  }
}

/* スマートフォン */
@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/
 a {
    width: 100%;
    height: $header-height_sp;
    line-height: $header-height_sp;

    &:active {
      color:rgb(156, 160, 156)
    }
  }
}

</style>