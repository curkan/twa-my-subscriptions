<script lang="ts" setup>
import { MainButton } from 'vue-tg'

// const { showAlert } = useWebAppPopup() as { showAlert: (message: string) => void };
</script>

<template>
    <div class="subs">
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
    <MainButton text="Добавить подписку" @click="" />
</template>

<style lang="scss">
@import '~/assets/sass/common/base/fonts';
@import '~/assets/sass/common/base/base';
@import '~/assets/sass/common/base/main';
@import '~/assets/sass/subs/subs';
@import '~/assets/sass/common/base/btn';
</style>
