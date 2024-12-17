<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { useAuth } from "@/composables/auth/auth";
import { useUpdateUser } from "@/composables/auth/useUpdateUser";
import router from "@/router";
import { useUserStore } from "@/stores/useUserStore";
import { onMounted, ref, watch } from "vue";
import { useWebAppBackButton } from "vue-tg";
const checked = ref(true);
const { onBackButtonClicked } = useWebAppBackButton();
const { hideBackButton } = useWebAppBackButton();

onMounted(async () => {
  await useAuth();
  useWebAppBackButton().showBackButton();
  checked.value = Boolean(useUserStore().authUser?.settings.notify_to_bot);

  watch(checked, () => {
    useUpdateUser({
      settings: {
        notify_to_bot: checked.value,
      },
    });
  });
});

onBackButtonClicked(() => {
  hideBackButton();
  router.push("/");
});
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
