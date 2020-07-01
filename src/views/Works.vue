<template>
  <div class="works">
    <WorkCard v-for="work in works" :key="work.img_path" :item="work" />
  </div>
</template>

<script>
import WorkCard from "@/components/WorkCard";

export default {
  name: "works",
  components: {
    WorkCard
  },
  data() {
    return {
      works: [
        {
          img_path: require("@/static/portfolio.png"),
          title: "Portfolio Syte",
          text:
            "ポートフォリオサイト（ここのサイト）です。SPAを体感してみたくVue.jsを使って製作しました。レスポンシブデザインにしています。",
          font_awesome: [
            //githubのアイコンがあったらリンクを飛ばす
            //ブログのアイコンがあったらリンクを飛ばす
            { value: ["fab", "vuejs"] },
            { value: ["fab", "html5"] },
            { value: ["fab", "sass"] },
            { value: ["fab", "github"] }
          ],
          links: [
            {
              link: "https://github.com/otouto3/portfolio",
              link_name: "GitHub"
            }
          ]
        },
        {
          img_path: require("@/static/unity_game.png"),
          title: "2Dアクションゲーム",
          text:
            "簡単な操作で遊べる2DアクションゲームをUnityとC#で作りました。絵や音楽も自分で作りました。ステージを増やしてup予定です。",
          font_awesome: [],
          devicon: [{ value: ["devicons devicons-unity_small"] }],
          links: [
            {
              link: "https://otoutoblog.com/unity-mygame",
              link_name: "Blog"
            }
          ]
        },
        {
          img_path: require("@/assets/img/after_tissue_infer_id1.png"),
          title: "ゴミひろいロボットその１ OBJECT DECTION",
          text:
            "ゴミ拾いロボットを目指して,まずは第一段階としてPytorchでティッシュの物体検出を行いました。",
          font_awesome: [{ value: ["fab", "python"] }],
          devicon: [],
          links: [
            {
              link: "https://otoutoblog.com/tisuue-object-detection",
              link_name: "Blog"
            }
          ]
        },
        {
          img_path: require("@/assets/gif/TodoAppForGithub.gif"),
          title: "Todoアプリ",
          text:
            "Flutterを使ってTodoアプリを作成しました。DBの勉強も兼ねてSQLiteを使いました。ポップなデザインに拘りました。",
          font_awesome: [
            { value: ["fas", "database"] },
            { value: ["fab", "github"] }
          ],
          links: [
            {
              link: "https://github.com/otouto3/flutter-todo-app",
              link_name: "GitHub"
            }
          ]
        },
        {
          img_path: require("@/assets/img/DailyUI_logo2.png"),
          title: "DailyUI",
          text:
            "デザインやUIの知識をつけるために、DailyUIというUIの100本ノックを始めました。Adobe Illustratorなどを使って作成しています。",
          font_awesome: [
            { value: ["fab", "adobe"] },
            { value: ["fab", "github"] }
          ],
          links: [
            {
              link: "https://github.com/otouto3/dailyUI",
              link_name: "GitHub"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.works {
  padding-top: 50px;
}
</style>