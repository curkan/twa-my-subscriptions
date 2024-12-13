<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { ref } from "vue";
const checked = ref(true);
</script>

<template>
  <main>
    <van-cell-group title="Оповещения" :border="false" inset>
      <van-field
        :label-width="200"
        name="notifyInBot"
        :label="'Оповещение в боте'"
        center
        label-align="left"
        input-align="right"
      >
        <template #input right>
          <van-switch v-model="checked" />
        </template>
      </van-field>
    </van-cell-group>
    <ThemeSwitcher />
  </main>
</template>

<style scoped lang="scss">
main {
  margin-left: -1em;
  margin-right: -1em;
  margin-top: -1em;
}
</style>
