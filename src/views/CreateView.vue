<script setup lang="ts">
import {
  useCreateSub,
  type ICreateSubscriptionData,
} from "@/composables/main/useCreateSub";
import router from "@/router";
import { showSuccessToast, showToast } from "vant";
import { onMounted, ref } from "vue";
import { useWebAppBackButton } from "vue-tg";

const showCardNumber = ref(false);
const showAmountNumber = ref(false);
const numberCard = ref();
const numberAmount = ref();
const title = ref<string>();
const period = ref("Ежемесячно");
const pickerValue = ref(["Monthly"]);
const showPicker = ref(false);
const showPickerStartDate = ref(false);
const columnsPeriod = [
  { text: "Ежегодно", value: "Annually" },
  { text: "Ежемесячно", value: "Monthly" },
  { text: "Еженедельно", value: "Weekly" },
];
const startDate = ref();
const pickerValueStartDate = ref();
const { onBackButtonClicked } = useWebAppBackButton();
const { hideBackButton } = useWebAppBackButton();

const onClickCreate = () => {
  useCreateSub({
    amount: numberAmount.value as number,
    title: title.value,
    start_at: pickerValueStartDate.value.join("-"),
    period: pickerValue.value[0],
    pan: numberCard.value,
  })
    .then(() => {
      showSuccessToast("Успешно создано");
      hideBackButton();
      router.replace("/");
    })
    .catch((error) => {
      showToast(error);
    });
};

const onConfirmPicker = ({ selectedValues, selectedOptions }) => {
  period.value = selectedOptions[0]?.text;
  pickerValue.value = selectedValues;
  showPicker.value = false;
};

const onConfirmStartDate = ({ selectedValues, selectedOptions }) => {
  startDate.value = selectedValues.join(".");
  pickerValueStartDate.value = selectedValues;
  showPickerStartDate.value = false;
};

const minDate = new Date(2015, 0, 1);
const maxDate = new Date();

onMounted(() => {
  useWebAppBackButton().showBackButton();
});

onBackButtonClicked(() => {
  hideBackButton();
  router.replace("/");
});
</script>

<template>
  <main>
    <van-cell-group title="Добавление подписки" :border="false" inset>
      <van-field
        name="displayName"
        v-model="title"
        :label="'Название'"
        required
        placeholder="Название подписки"
        :rules="[{ required: true, message: 'Название подписки обязательное' }]"
      />

      <van-field
        v-model="numberCard"
        readonly
        clickable
        @touchstart.stop="showCardNumber = true"
        name="Карта"
        :label="'Карта'"
        placeholder="Последние 4 цифры"
      />

      <van-field
        v-model="period"
        required
        is-link
        readonly
        name="picker"
        label="Период"
        placeholder="Выберите период"
        @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" destroy-on-close position="bottom">
        <van-picker
          :model-value="pickerValue"
          :columns="columnsPeriod"
          @confirm="onConfirmPicker"
          @cancel="showPicker = false"
        />
      </van-popup>

      <van-field
        v-model="numberAmount"
        type="number"
        readonly
        clickable
        required
        @touchstart.stop="showAmountNumber = true"
        label="Сумма"
        placeholder="Сумма в рублях"
      />

      <van-field
        v-model="startDate"
        is-link
        readonly
        name="datePicker"
        label="Дата оплаты"
        placeholder="Выберите дату оплаты"
        required
        @click="showPickerStartDate = true"
      />
      <van-popup
        v-model:show="showPickerStartDate"
        destroy-on-close
        position="bottom"
        :round="true"
      >
        <van-date-picker
          :model-value="pickerValueStartDate"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirmStartDate"
          @cancel="showPickerStartDate = false"
        />
      </van-popup>
    </van-cell-group>
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

  <van-number-keyboard
    :show="showCardNumber"
    close-button-text="Close"
    v-model="numberCard"
    :maxlength="4"
    @blur="showCardNumber = false"
  />

  <van-number-keyboard
    :show="showAmountNumber"
    close-button-text="Close"
    v-model="numberAmount"
    :maxlength="10"
    @blur="showAmountNumber = false"
  />
</template>

<style scoped lang="scss">
main {
  margin-left: -1em;
  margin-right: -1em;
  margin-top: -1em;
}
</style>
