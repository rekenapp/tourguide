<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(`${route.params.slug?.[1]}`)))

const { data: post } = await useAsyncData('page-' + slug.value, async () => {
    const collection = ('posts_' + locale.value) as keyof Collections
    const content = await queryCollection(collection).path(slug.value).first()
    console.log(slug.value)
    if (!content && locale.value !== 'id') {
        return await queryCollection('posts_id').path(slug.value).first()
    }

    return content
}, {
    watch: [locale], 
})

useSeoMeta({
    title: post.value?.title,
    description: post.value?.description
})
</script>

<template>
    <UContainer class="mx-auto py-10 lg:py-14 space-y-8 max-w-3xl">
        <div>
            <div class="flex justify-between items-center mb-6">
                <div class="flex w-full sm:items-center gap-5 sm:gap-3">
                    <div class="shrink-0">
                        <img class="size-12 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar">
                    </div>
                    <div class="grow">
                        <div class="flex justify-between items-center gap-2">
                            <div>
                                <span class="font-semibold text-gray-800 dark:text-neutral-200">
                                    {{ post.author || 'Tony Aditama' }}
                                </span>

                                <ul class="text-xs text-gray-500 dark:text-neutral-500">
                                    <li class="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                                        {{ post.date ? new Date(post.date).toLocaleDateString('id-ID') : 'Recent' }}
                                    </li>
                                    <li class="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                                        5 min read
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-y-5 md:space-y-8">
                <Heading :title="post.title" :description="post.description" />
                <NuxtImg v-if="post.image" :src="post.image" alt="Post Image" class="rounded-lg w-full" />
                <ContentRenderer class="prose dark:prose-invert" :value="post.body" />
            </div>
        </div>
        <div class="flex justify-center">
            <UButton variant="soft" color="neutral" to="/" label="Kembali ke beranda" icon="i-lucide-arrow-left" class="mx-auto" />
        </div>
    </UContainer>
</template>
