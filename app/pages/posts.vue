<script setup lang="ts">
import PostAll from '~/components/Post/All.vue'
useSeoMeta({
    title: 'Blog Posts - Tour Guide Yogyakarta',
    description: 'Semua artikel dan tips wisata dari tour guide profesional di Yogyakarta dan Jawa'
})
</script>

<template>
    <div class="relative flex flex-col items-center justify-center min-h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Heading title="Semua Blog Posts" description="Koleksi lengkap tips, pengalaman, dan panduan wisata di Yogyakarta dan Jawa dari tour guide profesional." class="text-center" />
        <PostAll />
        <UButton variant="soft" color="neutral" to="/" label="Kembali ke beranda" icon="i-lucide-arrow-left" />
    </div>
</template>
