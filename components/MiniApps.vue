<script lang="ts" setup>
import { ExpandedViewport, MainButton, useWebApp, useWebAppBackButton, useWebAppPopup, useWebAppTheme, useWebAppViewport } from 'vue-tg'

const { showAlert } = useWebAppPopup() as { showAlert: (message: string) => void };
const { showBackButton } = 	useWebAppBackButton();

const routeToCreate = () => {
    showBackButton()
    return navigateTo('/create')
}
</script>

<template>
    <ExpandedViewport :force="true" />
    <div class="subs">
        <div class="subs__header">
            <h2>Мои подписки</h2>
            <div class="subs__header-create" @click="routeToCreate"></div>
        </div>
        <div class="subs__wallet">
            <div class="subs__wallet-title">Расход в месяц</div>
            <div class="subs__wallet-amount">2.290,00 ₽</div>
        </div>

        <div class="subs__content">
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
                                <h3>Ainox</h3>
                            </div>
                            <div class="subs__content-item-date">13 июля 2024 г.</div>
                        </div>
                        <div class="subs__content-item-amount">2.290,00 ₽</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="subs__content-item-controls">
                        <div class="subs__content-item-controls-btn btn-edit">Редактировать</div>
                        <div class="subs__content-item-controls-btn btn-warning">Удалить</div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

    </div>
    <MainButton text="Добавить подписку" @click="() => showBackButton()" />
</template>

<style lang="scss">
@import '~/assets/sass/common/base/fonts';
@import '~/assets/sass/common/base/base';
@import '~/assets/sass/common/base/main';
@import '~/assets/sass/common/base/btn';
@import '~/assets/sass/subs/subs';
</style>
