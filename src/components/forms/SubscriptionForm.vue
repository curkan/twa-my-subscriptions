<script setup lang="ts">
import { ref } from "vue";

const title = defineModel("title", { required: true });
const numberCard = defineModel("numberCard", { required: true });
const numberAmount = defineModel("numberAmount", { required: true });
const period = defineModel("period", { required: true });
const pickerValue = defineModel("pickerValue", { required: true });
const pickerValueStartDate = defineModel("pickerValueStartDate", {
  required: true,
});
const startDate = defineModel("startDate", { required: true });

const emit = defineEmits(["update:period", "update:startDate"]);

const showCardNumber = ref(false);
const showAmountNumber = ref(false);
const showPicker = ref(false);
const showPickerStartDate = ref(false);
const columnsPeriod = ref([
  { text: "Ежегодно", value: "annually" },
  { text: "Ежемесячно", value: "monthly" },
  { text: "Еженедельно", value: "weekly" },
]);
const minDate = ref(new Date(2015, 0, 1));
const maxDate = ref(new Date());

const onConfirmPicker = ({ selectedValues, selectedOptions }) => {
  emit("update:period", selectedOptions[0]?.text);
  pickerValue.value = selectedValues;
  showPicker.value = false;
};

const onConfirmStartDate = ({ selectedValues, selectedOptions }) => {
  emit("update:startDate", selectedValues.join("."));
  pickerValueStartDate.value = selectedValues;
  showPickerStartDate.value = false;
};
</script>
<template>
  <van-cell-group title="Подписка" :border="false" inset>
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
