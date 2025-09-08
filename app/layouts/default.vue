<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';
const config = useRuntimeConfig()
const isMenuOpen = ref(false)

const navigations: NavigationMenuItem[] = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Posts', to: '/posts' }
]

const socialMediaNavigations: NavigationMenuItem[] = [
    { href: `mailto:${config.public.owner.email}`, icon: 'i-lucide-mail' },
    ...config.public.owner.socials
]

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}
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
                <UButton :icon="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" variant="ghost" class="cursor-pointer lg:hidden rounded-full" @click="toggleMenu" />
                <UButton label="Book a call" color="neutral" size="lg" class="rounded-full hidden lg:flex" icon="i-lucide-phone" />
            </UCard>
            <Transition name="fade">
                <UCard v-if="isMenuOpen" class="mt-2 rounded-2xl bg-default/95 backdrop-blur-lg lg:hidden" :ui="{ body: 'p-4' }">
                    <div class="flex flex-col gap-3">
                        <UButton v-for="nav in navigations" :key="nav.label" :to="nav.to" variant="ghost" class="cursor-pointer justify-start text-left" @click="closeMenu">
                            {{ nav.label }}
                        </UButton>
                        <UButton label="Book a call" color="neutral" size="lg" class="rounded-full w-full" icon="i-lucide-phone" @click="closeMenu" />
                    </div>
                </UCard>
            </Transition>
        </UContainer>

        <main class="grow">
            <slot />
        </main>

        <UContainer class="mt-auto w-full flex flex-col md:flex-row items-center justify-between gap-3 py-6">
            <div class="flex-1 flex items-center justify-center gap-2">
                <UButton icon="i-custom-brand" variant="soft" class="rounded-full" to="/" />
                <p class="font-semibold text-lg">{{ config.public.owner.company }}</p>
            </div>
            <div class="flex-1 flex justify-center">
                <UNavigationMenu :items="navigations" variant="link" class="hidden md:flex" />
            </div>
            <div class="flex-1 flex justify-center">
                <UNavigationMenu :items="socialMediaNavigations" variant="link" class="flex gap-2" />
            </div>
        </UContainer>
    </div>
</template>