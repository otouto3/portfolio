<!---
The MIT License (MIT)

Copyright (c) 2019 otouto

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
--->

<template>
  <section class="work-card">
    <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css" rel="stylesheet">
    <img class="work-img" v-bind:src="item.img_path" width="300" height ="300" alt="" />
    <div class="work-content">
      <p class="work-title">
        {{ item.title }}
      </p>
      <p class="work-text">
        {{ item.text }}
      </p>
      <div class="work-icon">
        <ul>
          <li v-for="(icon, index) in item.font_awesome" :key=index>
            <font-awesome-icon :icon="icon.value"/>
          </li>
          <li v-for="(icon, index) in item.devicon" :key=index>
            <i :class="icon.value"></i>
          </li>
        </ul>
      </div>
      <div class="work-link" v-for="(link, index) in item.links" :key=index>
        <a :href="link.link">{{ link.link_name }}</a>
      </div>
    </div>>
  </section>
</template>

<script>
export default {
  name: 'WorkCard',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>

.work-card {
  width: 300px;
  padding:  20px;
  margin: 10px;
  background: rgb(235, 233, 233);
  border-radius: 10px;
  box-shadow: 0 2px 5px #ccc;
  list-style: none;
  display: inline-block;
  font-family: "M PLUS 1p";
}

.work-content {
  padding: 20px;

    .work-img {
      margin-top: 3px;
      border-radius: 5px 5px 0 0;
      width: 300px;
      height: 300px;

    }

    .work-title {
      font-family: "Nico Moji";
      font-size: 20px;
      margin-bottom: 20px;
      text-align: center;
      color: #333;

      margin-top: 0px;
    }

    .work-text {
      color: #777;
      font-size: 14px;
      line-height: 1.5;
    }

    .work-icon {

      ul {
        padding: 0;
        text-align: center;
      }

      li {
        display: inline-block;
        font-size: 2.5em;
        padding: 0 10px;
      }
    }

    .work-link {

      text-align: center;
      border-top: 1px solid #eee;
      padding: 20px;

      a {
        text-decoration: none;
        color: rgb(224, 93, 174);
        margin: 0 10px;

        &:hover {
          color: #0090aa;
        }
      }
    }

}


/* iphone6,7,8 */
@media (min-width: 413px) and (max-width: 420px){
    .work-card {
        margin: 28px;
    }
}

/* ipad */
@media (min-width: 767px) and (max-width: 769px){
    .work-card {
        margin-right: 24px;
    }
}

/* ipad pro / pc用 */
@media (min-width: 770px){
    .work-card {
        margin-left: 50px;
    }
}





</style>
