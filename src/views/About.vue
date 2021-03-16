<template>
  <div class="about container">
    <div class="info-warpper">
      <div class="info-left"><info :small="true" /></div>
      <div class="info-right">
        <div class="card-list">
          <info-card
            v-for="link in links"
            :key="link.id"
            :url="link.url"
            :name="link.name"
            :color="link.color"
            class="info-card"
          >
            <svg-icon :name="link.icon" />
          </info-card>
        </div>
        <div class="description">
          <p>
            您好，这里是小扁担。出生于江西，现居广州。热爱科技数码
            想要成为马猴烧酒（划掉）
          </p>
          <p>
            希望从事互联网/Web相关工作。对于前端开发热爱的契机源于六年前，或许
            这一切都是命运石之门的选择！ El Psy Congroo
          </p>
        </div>
      </div>
    </div>
    <div class="progress-wrapper"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Info from "@/components/Info.vue";
import InfoCard from "@/components/InfoCard.vue";
import SvgIcon from "@/components/SvgIcon.vue";

export default defineComponent({
  name: "About",
  components: {
    Info,
    InfoCard,
    SvgIcon,
  },
  setup() {
    const links = [
      {
        id: 0,
        name: "My Blog",
        icon: "MyBlog",
        url: "https://biandan.me",
        color: "2EB5B9",
      },
      {
        id: 1,
        name: "GitHub",
        icon: "GitHub",
        url: "https://github.com/BianTan",
        color: "333",
      },
      {
        id: 2,
        name: "UI 中国",
        icon: "UICN",
        url: "https://i.ui.cn/ucenter/140038",
        color: "2B76AE",
      },
      {
        id: 3,
        name: "BiliBili",
        icon: "BiliBili",
        url: "https://space.bilibili.com/3572779",
        color: "FB7299",
      },
    ];

    return {
      links,
    };
  },
});
</script>

<style lang="scss" scoped>
.info-warpper {
  display: flex;
  align-items: flex-end;
  .info-left {
    display: flex;
    flex-direction: column;
  }
  .info-right {
    flex: 1;
    margin-left: 180px;
    .card-list {
      margin-bottom: 28px;
      .info-card:not(:last-child) {
        margin-right: 24px;
      }
    }
    .description {
      font-size: 18px;
      color: #fb7185;
      line-height: 28px;
      p:last-child {
        margin-top: 8px;
      }
    }
  }
}
</style>
