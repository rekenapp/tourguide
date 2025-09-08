<script setup lang="ts">
const { locale } = useI18n()

const { data: blogs } = await useAsyncData('blogs', () =>
    queryCollection(`posts_${locale.value}`).all(), {
    watch: [locale]
}
)
</script>

<template>
    <UContainer class="py-10 lg:py-14 space-y-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" v-if="blogs && blogs.length > 0">
            <UCard v-for="blog in blogs" :key="blog.id" @click="navigateTo(`/post/${blog.path.split('/').pop()}`)" class="cursor-pointer bg-muted hover:bg-accented/40 transition-all hover:-translate-y-0.5" variant="soft">
                <NuxtImg class="block w-full aspect-[4/3] object-cover rounded-xl" :src="blog.image" :alt="blog.title" />
                <Heading as="h4" :title="blog.title" :description="blog.description" class="[&>h4]:text-xl [&>p]:text-base mt-4" />
            </UCard>
        </div>
    </UContainer>
</template>