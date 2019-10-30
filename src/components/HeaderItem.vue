<template>
  <header id="header">
    <nav>
      <ul class="header-nav">
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
  background-color: rgb(139, 139, 139);
  top: 0px;
  left: 0px;
  position: fixed;
  //box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  li {
    width: 100%;
    //height: 100%;
    //margin-left: 36px;
    border: 2px solid #555;
    display: block; //親要素と同じまでクリックの範囲を広げる
  }

  a {
    display: block; //親要素と同じまでクリックの範囲を広げる
    text-decoration: none;
    text-align: center;
    color: white;
  }

  a:hover{
  color:rgb(70, 241, 28)
  }
}

/* タブレット */
@media (max-width: 1250px) {
  a {
    width: 100%;
    height: $header-height_tablet;
    line-height: $header-height_tablet;
  }
}
/* スマートフォン */
@media (max-width: 670px) {
  a {
    width: 100%;
    height: $header-height_sp;
    line-height: $header-height_sp;
  }

}

</style>