<script setup lang="ts">
import { useCreateSub } from "@/composables/main/useCreateSub";
import router from "@/router";
import { showSuccessToast, showToast } from "vant";
import { onMounted, ref } from "vue";
import { useWebAppBackButton } from "vue-tg";

const numberCard = ref();
const numberAmount = ref();
const title = ref<string>();
const period = ref("Ежемесячно");
const pickerValue = ref(["monthly"]);
const startDate = ref();
const pickerValueStartDate = ref();
const { onBackButtonClicked } = useWebAppBackButton();
const { hideBackButton } = useWebAppBackButton();

const onClickCreate = () => {
  useCreateSub({
    amount: numberAmount.value as number,
    title: String(title.value),
    start_at: pickerValueStartDate.value.join("-"),
    period: pickerValue.value[0],
    pan: numberCard.value,
  })
    .then(() => {
      showSuccessToast("Успешно создано");
      hideBackButton();
      router.push("/");
    })
    .catch((error) => {
      showToast(error);
    });
};

onMounted(() => {
  useWebAppBackButton().showBackButton();
});

onBackButtonClicked(() => {
  hideBackButton();
  router.push("/");
});
</script>

<template>
  <main>
    <SubscriptionForm
      v-model:title="title"
      v-model:numberCard="numberCard"
      v-model:period="period"
      v-model:numberAmount="numberAmount"
      v-model:startDate="startDate"
      v-model:pickerValue="pickerValue"
      v-model:pickerValueStartDate="pickerValueStartDate"
    />
    <div style="margin: 16px">
      <van-button
        round
        block
        type="primary"
        native-type="submit"
        @click="onClickCreate"
      >
        Создать
      </van-button>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  margin-left: -1em;
  margin-right: -1em;
  margin-top: -1em;
}
</style>
