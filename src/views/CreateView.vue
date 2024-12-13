<script setup lang="ts">
import { ref } from "vue";

const showCardNumber = ref(false);
const showAmountNumber = ref(false);
const numberCard = ref();
const numberAmount = ref();
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
</script>

<template>
  <main>
    <van-cell-group title="Добавление подписки" :border="false" inset>
      <van-field
        name="displayName"
        :label="'Название'"
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
        @touchstart.stop="showAmountNumber = true"
        label="Сумма"
        placeholder="Сумма в рублях"
      />

      <van-field
        v-model="startDate"
        is-link
        readonly
        name="datePicker"
        label="Дата начала"
        placeholder="Выберите дату начала"
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
      <van-button round block type="primary" native-type="submit">
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
