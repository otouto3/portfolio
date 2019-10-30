<template>
  <header id="header">
    <h1>This is the header.</h1>
    <nav id="header-nav">
        <router-link id="home-nav" to="/" exact><a>Home</a></router-link>
        <router-link id="about-nav" to="/about"><a>About</a></router-link>
        <router-link id="works-nav" to="/works"><a>Works</a></router-link>
        <router-link id="blog-nav" to="/blog"><a>Blog</a></router-link>
        <router-link id="contact-nav" to="/contact"><a>Contact</a></router-link>
    </nav>
  </header>
</template>

<style scoped>
</style>