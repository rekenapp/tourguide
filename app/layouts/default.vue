<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';
const config = useRuntimeConfig()

const navigations: NavigationMenuItem[] = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Posts', to: '/posts' }
]
const footerNavigations: NavigationMenuItem[] = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Posts', to: '/posts' }
]
const socialMediaNavigations: NavigationMenuItem[] = [
    { href: `${config.public.owner.email}`, icon: 'i-lucide-mail' },
    { href: `${config.public.owner.instagram}`, icon: 'i-lucide-instagram' },
    { href: `${config.public.owner.linkedin}`, icon: 'i-lucide-linkedin' },
    { href: `${config.public.owner.whatsapp}`, icon: 'i-lucide-message-circle' }
]
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <UContainer class="sticky top-0 pt-4 inset-x-0 z-10">
            <UCard class="rounded-full bg-default/40 backdrop-blur-lg" :ui="{ body: 'flex items-center justify-between gap-1 md:gap-2 p-2!' }">
                <div class="flex gap-2 items-center ms-2">
                    <UButton icon="i-custom-brand" variant="soft" class="rounded-full" to="/" />
                    <p class="font-semibold text-lg">{{ config.public.owner.company }}</p>
                </div>
                <div class="grow" />
                <UNavigationMenu :items="navigations" variant="link" class="hidden lg:flex" />
                <div class="flex justify-end gap-2 p-4 text-sm">
                    <SwitchLocalePathLink locale="id">ID</SwitchLocalePathLink>
                    <SwitchLocalePathLink locale="en">EN</SwitchLocalePathLink>
                </div>
                <ColorModeButton />
                <div />
                <UButton label="Book a call" color="neutral" size="lg" class="rounded-full" icon="i-lucide-phone" />
            </UCard>
        </UContainer>
        <main class="grow">
            <slot />
        </main>
        <footer class="mt-auto w-full py-10 px-6">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="flex-1 flex gap-2 items-center justify-center">
                    <UButton icon="i-custom-brand" variant="soft" class="rounded-full" to="/" />
                    <p class="font-semibold text-lg">{{ config.public.owner.company }}</p>
                </div>
                <div class="flex-1 flex justify-center">
                    <UNavigationMenu :items="footerNavigations" variant="link" class="hidden lg:flex" />
                </div>
                <div class="flex-1 flex gap-2 justify-center">
                    <UNavigationMenu :items="socialMediaNavigations" variant="link" class="hidden lg:flex" />
                </div>
            </div>
        </footer>
    </div>
</template>