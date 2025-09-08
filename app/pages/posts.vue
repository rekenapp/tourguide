<script setup lang="ts">
import PostAll from '~/components/Post/All.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useSeoMeta({
    title: t('Semua Posts - Trip Java Bali'),
    description: t('Semua artikel dan tips wisata dari tim profesional Trip Java Bali di Yogyakarta dan Jawa')
})

</script>

<template>
    <div class="relative flex flex-col items-center justify-center min-h-screen py-10 lg:py-14">
        <Heading :title="$t('Semua Blog Posts')" :description="$t('Koleksi lengkap tips, pengalaman, dan panduan wisata di Yogyakarta dan Jawa dari tour guide profesional.')" class="text-center" />
        <PostAll />
        <UButton variant="soft" color="neutral" to="/" :label="$t('Kembali ke beranda')" icon="i-lucide-arrow-left" />
    </div>
</template>
