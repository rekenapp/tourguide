<script setup lang="ts">
const config = useRuntimeConfig()
const contacts = [
    { icon: 'i-lucide-mail', href: `${config.public.owner.email}` },
    { icon: 'i-lucide-instagram', href: `${config.public.owner.instagram}` },
    { icon: 'i-lucide-twitter', href: `${config.public.owner.twitter}` },
    { icon: 'i-lucide-message-circle', href: `${config.public.owner.whatsapp}` }
]
</script>
<template>
    <div class="relative flex flex-col items-center justify-start min-h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div class="max-w-2xl w-full mb-10 lg:mb-14">
            <div class="flex gap-x-3 justify-center mb-6">
                <UAvatar
                    src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar"
                    size="2xl"
                    rounded
                    class="shrink-0"
                />
                <div class="grow text-left">
                    <h1 class="text-2xl font-bold dark:text-white">{{ config.public.owner.name }}</h1>
                    <p class="text-sm text-gray-600 dark:text-neutral-400">
                        Graphic Designer, Web designer/developer
                    </p>
                </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-neutral-400 mb-3">
                I am a seasoned graphic designer with over 14 years of experience in creating visually appealing and user-centric designs. My expertise spans across UI design, design systems, and custom illustrations, helping clients bring their digital visions to life.
            <br>
                Currently, I work remotely for Notion, where I design template UIs, convert them into HTML and CSS, and provide comprehensive support to our users. I am passionate about crafting elegant and functional designs that enhance user experiences.
            </p>

            <div>
                <UNavigationMenu :items="contacts" variant="link" class="flex space-y-2" />
            </div>
        </div>
    </div>
</template>