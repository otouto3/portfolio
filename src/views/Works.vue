<template>
  <div class="works">
    <WorkCard v-for="work in works" :key="work.img_path" :item="work" />
  </div>
</template>

<script>

import WorkCard from '@/components/WorkCard'

export default {
  name: 'works',
  components: {
    WorkCard
  },
  data () {
    return {
      works: [
        {
          img_path: require('@/static/portfolio.png'),
          title: 'Portfolio Syte',
          text: 'ポートフォリオサイト（ここのサイト）です。SPAを体感してみたくVue.jsを使って製作しました。レスポンシブデザインにしています。',
          font_awesome: [
            //githubのアイコンがあったらリンクを飛ばす
            //ブログのアイコンがあったらリンクを飛ばす
            { value: ["fab", "vuejs"] },
            { value: ["fab", "html5"] },
            { value: ["fab", "sass"] },
            { value: ["fab", "github"] },
          ],
          links: [
            {
             link: 'https://github.com/otouto3/portfolio',
             link_name: 'GitHub'
            },
          ],
        },
        {
          img_path: require('@/static/unity_game.png'),
          title: '2Dアクションゲーム',
          text: '簡単な操作で遊べる2DアクションゲームをUnityとC#で作りました。絵や音楽も自分で作りました。ステージを増やしてup予定です。',
          font_awesome: [],
          devicon: [
            { value: ["devicons devicons-unity_small"]},
          ],
          links: [
            {
             link: 'https://otoutoblog.com/unity-mygame',
             link_name: 'Blog'
            },
          ],
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.works {
  padding-top: 50px;
}
</style>