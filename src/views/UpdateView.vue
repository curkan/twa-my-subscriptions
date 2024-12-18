<script setup lang="ts">
import SubscriptionForm from "@/components/forms/SubscriptionForm.vue";
import { useGetSubData } from "@/composables/main/useGetSubData";
import { useUpdateSub } from "@/composables/main/useUpdateSub";
import i18n from "@/i18n";
import router from "@/router";
import { showFailToast, showSuccessToast, showToast } from "vant";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useWebAppBackButton } from "vue-tg";
const { hideBackButton } = useWebAppBackButton();

const route = useRoute();
const subscriptionId = ref<number>();

const numberCard = ref();
const numberAmount = ref();
const title = ref<string>();
const period = ref();
const pickerValue = ref();
const startDate = ref();
const pickerValueStartDate = ref();

onMounted(() => {
  subscriptionId.value = Number(route.params.id);
  useGetSubData(subscriptionId.value).then((response) => {
    numberCard.value = response?.pan;
    numberAmount.value = String(response?.amount);
    title.value = response?.title;

    period.value = i18n.global.t(`period.${response?.period}`);
    pickerValue.value = [response?.period];

    const dateArr = response?.start_at.split(" ")[0].split("-");
    pickerValueStartDate.value = dateArr;

    const date = new Date(String(response?.start_at));
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    // Используем 'de-DE' как пример локали, которая использует точку в качестве разделителя
    startDate.value = date
      .toLocaleDateString("de-DE", options as Intl.DateTimeFormatOptions)
      .replace(",", "")
      .split(".")
      .reverse()
      .join(".");
  });
});

const onClickUpdate = () => {
  useUpdateSub({
    id: Number(subscriptionId.value),
    amount: numberAmount.value as number,
    title: String(title.value),
    start_at: pickerValueStartDate.value.join("-"),
    period: pickerValue.value[0],
    pan: numberCard.value,
  })
    .then((response) => {
      showSuccessToast("Успешно обновлено");
      hideBackButton();
      router.push("/");
    })
    .catch((error) => {
      showToast("Произошла ошибка." + error);
    });
};
</script>

<template>
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
      @click="onClickUpdate"
    >
      Сохранить
    </van-button>
  </div>
</template>
