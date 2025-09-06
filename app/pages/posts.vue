<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () =>
    queryCollection('posts').all()
)

useSeoMeta({
    title: 'Blog Posts - Tour Guide Yogyakarta',
    description: 'Semua artikel dan tips wisata dari tour guide profesional di Yogyakarta dan Jawa'
})
</script>

<template>
    <!-- Blog Posts Page -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Header -->
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h1 class="text-3xl font-bold md:text-4xl md:leading-tight dark:text-white">Semua Blog Posts</h1>
            <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Koleksi lengkap tips, pengalaman, dan panduan wisata di Yogyakarta dan Jawa dari tour guide profesional.
            </p>
        </div>
        <!-- End Header -->

        <!-- Posts Grid -->
        <div v-if="posts && posts.length > 0">
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Post Card -->
                <NuxtLink v-for="post in posts" :key="post.id" :to="`/post/${post.path.split('/').pop()}`" class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40">
                    <!-- Post Image -->
                    <div class="relative overflow-hidden rounded-xl">
                        <img class="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300" :src="(post.meta.image as string) || 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80'" :alt="post.title">
                        <!-- Date Badge -->
                        <div class="absolute top-3 left-3">
                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:text-neutral-200">
                                {{ post.meta.date ? new Date(post.meta.date as string).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                }) : 'Recent' }}
                            </span>
                        </div>
                    </div>

                    <!-- Post Content -->
                    <div class="mt-6 flex-1">
                        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors dark:text-neutral-300 dark:group-hover:text-blue-500">
                            {{ post.title }}
                        </h3>
                        <p class="mt-3 text-gray-600 dark:text-neutral-400 line-clamp-3">
                            {{ post.description }}
                        </p>
                    </div>

                    <!-- Post Footer -->
                    <div class="mt-6 flex items-center gap-x-3">
                        <div class="shrink-0">
                            <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar">
                        </div>
                        <div class="grow">
                            <h5 class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                {{ (post.meta.author as string) || 'Tony Aditama' }}
                            </h5>
                            <p class="text-xs text-gray-500 dark:text-neutral-500">
                                Tour Guide Profesional
                            </p>
                        </div>
                        <div class="text-right">
                            <span class="inline-flex items-center text-xs text-gray-500 dark:text-neutral-500">
                                5 min read
                                <svg class="ml-1 shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </NuxtLink>
                <!-- End Post Card -->
            </div>
        </div>
        <!-- End Posts Grid -->

        <!-- Empty State -->
        <div v-else class="text-center py-12">
            <div class="max-w-md mx-auto">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">Belum ada posts</h3>
                <p class="mt-2 text-gray-500 dark:text-neutral-400">
                    Blog posts akan muncul di sini ketika sudah ditambahkan.
                </p>
            </div>
        </div>
        <!-- End Empty State -->

        <!-- Back to Home -->
        <div class="mt-12 text-center">
            <NuxtLink class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" to="/">
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6" />
                </svg>
                Kembali ke Home
            </NuxtLink>
        </div>
        <!-- End Back to Home -->
    </div>
    <!-- End Blog Posts Page -->
</template>