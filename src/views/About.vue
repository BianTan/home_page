<template>
  <div class="about container">
    <div class="info-warpper">
      <div class="info-left"><info :small="true" /></div>
      <div class="info-right">
        <div class="card-list">
          <info-card
            v-for="link in aboutLinks"
            :key="link.id"
            :url="link.url"
            :name="link.name"
            :color="link.color"
            class="info-card"
          >
            <svg-icon :name="link.icon" />
            <template #test>
              <svg-icon :name="link.icon" />
            </template>
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
    <div class="progress-list">
      <Bd-progress
        class="progress-li"
        v-for="item in progressList"
        :key="item.id"
        :title="item.title"
        :desc="item.desc"
        :progressWidth="item.progressWidth"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { aboutLinks, progressList } from "@/common/config";
import Info from "@/components/Info.vue";
import InfoCard from "@/components/InfoCard.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import BdProgress from "@/components/BdProgress.vue";

export default defineComponent({
  name: "About",
  components: {
    Info,
    InfoCard,
    SvgIcon,
    BdProgress,
  },
  setup() {
    return {
      aboutLinks,
      progressList,
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
.progress-list {
  width: 88%;
  margin-top: 64px;
  .progress-li:not(:last-child) {
    margin-bottom: 42px;
  }
}
</style>
