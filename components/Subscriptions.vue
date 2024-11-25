<script lang="ts" setup>
import { useWebAppBackButton } from 'vue-tg'
import {Api} from '~/composables/api/api';
import type {Subscription} from '~/composables/subscriptions/subscriptions.type';

const { showBackButton } = 	useWebAppBackButton();
const subscriptions = ref<Subscription[] | undefined>()

const initData = useState('initData')

const isOpenEdit = ref(false)
const isOpenDelete = ref(false)
const deletingElement = ref<Subscription | null>(null)

const result = await Api.get(btoa(initData.value as string), '/common/subscriptions')
if (result.resp?.value) {
    const resp = result.resp as Ref<ApiResponse<Subscription[]>>
    subscriptions.value = resp.value.data 
}

const totalAmount = computed(() => {
  if (!subscriptions.value) return 0
  const total = subscriptions.value.reduce((acc, subscription) => acc + parseFloat(subscription.amount), 0)
  return total.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2,
  })
})

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const deleting = async (): Promise<void | undefined> => {
    if (deletingElement.value === null) {
        return
    }

    const result = await Api.delete(btoa(initData.value as string), `/common/subscriptions/${deletingElement.value.id}`)
    const status = result.status
    const error: Ref = result.error
    if (error.value) {
        console.log('error')
        return
    }
    const index = subscriptions.value?.indexOf(deletingElement.value)
    if (index > -1) {
        subscriptions.value?.splice(index, 1)
    }

    isOpenDelete.value = false
}

const routeToCreate = () => {
    showBackButton()
    return navigateTo('/create')
}

const openModalDeleting = (
    sub: Subscription
) => {
    isOpenDelete.value = true
    deletingElement.value = sub
}

</script>

<template>
    <UModal v-model="isOpenEdit">
      <div class="p-4">
        <Placeholder class="h-48" />
      </div>
    </UModal>

    <UModal v-model="isOpenDelete">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                Подтвердите удаление
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpenDelete = false" />
          </div>
        </template>
        <template #footer>
            <div class="flex items-center justify-center gap-2">
                <UButton label="Удалить" @click="deleting"/>
                <UButton label="Отменить" color="red" @click="isOpenDelete = false"/>
            </div>
        </template>
      </UCard>
    </UModal>

    <div class="subs__header">
        <h2>Мои подписки</h2>
          <UButton
            icon="i-heroicons-plus"
            size="sm"
            color="primary"
            variant="solid"
            :trailing="false"
            @click="routeToCreate"
            class="subs__header-create"
          />
    </div>
    <div class="subs">
        <div class="subs__wallet">
            <div class="subs__wallet-title">Расход в месяц</div>
            <div class="subs__wallet-amount">{{totalAmount}}</div>
        </div>

        <div class="subs__content">
            <div
                class="subs__content__wrapper"
                v-for="subscription in subscriptions"
            >   
                <Swiper
                    :space-between="15"
                    slides-per-view="auto"
                >
                    <SwiperSlide>
                        <div class="subs__content-item">
                            <img
                                class="subs__content-item-img" 
                                :src="'/icons/empty-img.svg'"
                            />
                            <div class="subs__content-item-wrapper">
                                <div class="subs__content-item-title">
                                    <h3>{{subscription.title}}</h3>
                                </div>
                                <div class="subs__content-item-date">
                                    {{
                                        new Date(subscription?.start_at).toLocaleDateString('ru', dateOptions)
                                    }}

                                </div>
                            </div>
                            <div class="subs__content-item-amount">{{subscription.amount}} ₽</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="subs__content-item-controls">
                            <!-- <UButton label="Редактировать" @click="isOpenEdit = true" /> -->
                            <UButton label="Удалить" color="red" @click="openModalDeleting(subscription)" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>

    </div>
</template>

<style lang="scss">
@import '~/assets/sass/common/base/fonts';
@import '~/assets/sass/common/base/base';
@import '~/assets/sass/common/base/main';
@import '~/assets/sass/subs/subs';
@import '~/assets/sass/common/base/btn';
</style>
