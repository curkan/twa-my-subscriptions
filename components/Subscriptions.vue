<script lang="ts" setup>
import { MainButton, useWebApp, useWebAppBackButton, useWebAppBiometricManager, useWebAppPopup } from 'vue-tg'
import {Api} from '~/composables/api/api';
import type {Subscription} from '~/composables/subscriptions/subscriptions.type';

const { showBackButton } = 	useWebAppBackButton();
const subscriptions = ref<Subscription[] | undefined>()

const initData = useState('initData')

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

const deleting = async (
    sub: Subscription
): Promise<void | undefined> => {
    const result = await Api.delete(btoa(initData.value as string), `/common/subscriptions/${sub.id}`)
    const status = result.status
    const error: Ref = result.error
    if (error.value) {
        console.log('error')
        return
    }
    const index = subscriptions.value?.indexOf(sub)
    if (index > -1) {
        subscriptions.value?.splice(index, 1)
    }
}

const routeToCreate = () => {
    showBackButton()
    return navigateTo('/create')
}

</script>

<template>
    <div class="subs__header">
        <h2>Мои подписки</h2>
        <div
            class="subs__header-create"
            @click="routeToCreate"
        ></div>
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
                            <!-- <div class="subs__content-item-controls-btn btn-edit">Редактировать</div> -->
                            <div 
                                class="subs__content-item-controls-btn btn-warning"
                                @click="deleting(subscription)"

                            >
                                Удалить
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>

    </div>
    <MainButton text="Добавить подписку" @click.prevent="" />
</template>

<style lang="scss">
@import '~/assets/sass/common/base/fonts';
@import '~/assets/sass/common/base/base';
@import '~/assets/sass/common/base/main';
@import '~/assets/sass/subs/subs';
@import '~/assets/sass/common/base/btn';
</style>
