<script setup lang="ts">
const { locale } = useI18n()

const { data: posts } = await useAsyncData('posts', () =>
    queryCollection(`posts_${locale.value}`).limit(3).all(), {
    watch: [locale]
}
)
</script>

<template>
    <UContainer class="py-10 lg:py-14 space-y-8">
        <div class="flex flex-wrap justify-between gap-4 items-center">
            <Heading :title="$t('Dari Blog Kita')" :description="$t('Tips seru dan pengalaman wisata di Yogyakarta serta Jawa dari tour guide profesional yang sudah lama di sini.')" />
            <UButton variant="soft" color="neutral" to="/posts" :label="$t('Lihat Semua')" trailing-icon="i-lucide-arrow-right" />
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" v-if="posts && posts.length > 0">
            <UCard v-for="post in posts" :key="post.id" @click="navigateTo(`/post/${post.path.split('/').pop()}`)" class="cursor-pointer bg-muted hover:bg-accented/40 transition-all hover:-translate-y-0.5" variant="soft">
                <NuxtImg class="block w-full aspect-[4/3] object-cover rounded-xl" :src="post.image" :alt="post.title" />
                <Heading as="h4" :title="post.title" :description="post.description" class="[&>h4]:text-xl [&>p]:text-base mt-4" />
            </UCard>
        </div>
    </UContainer>
</template>