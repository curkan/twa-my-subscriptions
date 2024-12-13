<script setup lang="ts">
import { showDialog } from "vant";
import IconDelete from "./icons/IconDelete.vue";
import IconEdit from "./icons/IconEdit.vue";

const close = () => {
  showDialog({
    title: "Вы уверены?",
    showConfirmButton: true,
    showCancelButton: true,
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
      // on cancel
    });
};
</script>

<template>
  <main class="subscription-block">
    <van-swipe-cell>
      <div class="subscription-card">
        <div class="left">
          <div class="line name">Ainox</div>
          <div class="line card">**** **** **** 2312</div>
          <div class="line date">16 июля 2024 г.</div>
        </div>
        <div class="right">
          <div class="line amount">2.290,00 ₽</div>
          <div class="line period">Ежемесячно</div>
        </div>
      </div>
      <template #right>
        <van-button square type="primary" class="button">
          <IconEdit />
        </van-button>
        <van-button
          @click="close"
          square
          type="danger"
          class="button right-button"
        >
          <IconDelete />
        </van-button>
      </template>
    </van-swipe-cell>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/scss/subscriptions/card.scss";
</style>
