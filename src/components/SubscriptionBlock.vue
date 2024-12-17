<script setup lang="ts">
import { showDialog } from "vant";
import IconDelete from "./icons/IconDelete.vue";
import IconEdit from "./icons/IconEdit.vue";
import type { ISubscription } from "@/composables/types/subscription.type";
import type { PropType } from "vue";
import { useDeleteSub } from "@/composables/main/useDeleteSub";
import router from "@/router";

const emit = defineEmits(["deleteSubscription"]);

const props = defineProps({
  subscription: { type: Object as PropType<ISubscription>, required: true },
});

const deleteSub = (subscriptionId: number) => {
  showDialog({
    title: "Вы уверены?",
    showConfirmButton: true,
    showCancelButton: true,
  })
    .then(() => {
      useDeleteSub(subscriptionId).then(() => {
        emit("deleteSubscription", subscriptionId);
      });
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
          <div class="line name">{{ subscription?.title }}</div>
          <div class="line card" v-if="subscription.pan">
            **** **** **** {{ subscription.pan }}
          </div>
          <div class="line date">
            {{ new Date(subscription.start_at).toLocaleDateString("ru") }}
          </div>
        </div>
        <div class="right">
          <div class="line amount">
            <vue-number
              suffix=" ₽"
              separator=" "
              v-model="subscription.amount"
              placeholder="0.00"
              readonly
            ></vue-number>
          </div>
          <div class="line period">
            {{ $t(`period.${subscription?.period}`) }}
          </div>
        </div>
      </div>
      <template #right>
        <van-button
          square
          type="primary"
          class="button"
          @click="router.replace(`/update/${subscription.id}`)"
        >
          <IconEdit />
        </van-button>
        <van-button
          @click="deleteSub(subscription.id)"
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
