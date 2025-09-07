<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()

const contacts = [
    { icon: 'i-lucide-mail', href: `${config.public.owner.email}` },
    { icon: 'i-lucide-instagram', href: `${config.public.owner.instagram}` },
    { icon: 'i-lucide-twitter', href: `${config.public.owner.twitter}` },
    { icon: 'i-lucide-message-circle', href: `${config.public.owner.whatsapp}` }
]
useSeoMeta({
    title: t('Tentang Kami - Trip Java Bali'),
    description: t('Pelajari lebih lanjut tentang tim berpengalaman Trip Java Bali kami, yang berdedikasi memberikan pengalaman perjalanan yang berkesan dan tur yang dipersonalisasi di Jawa dan Bali.')
})
</script>
<template>
    <div class="relative flex flex-col items-center justify-start min-h-screen py-10 lg:py-14 px-4">
        <div class="max-w-2xl w-full space-y-6">
            <div class="flex flex-col items-center justify-center gap-3">
                <UAvatar src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" rounded class="w-32 h-32" />
                <Heading as="h2" :title="config.public.owner.name" class="text-center [&>p]text-base" :description="$t('Tim Profesional Trip Java Bali')" />
            </div>
            <div class="space-y-4 text-muted">
                <p>{{ $t('Kami adalah tim profesional Trip Java Bali, berdedikasi untuk memberikan pengalaman perjalanan yang berkesan dan personal di seluruh Jawa dan Bali. Dengan bertahun-tahun keahlian dalam membimbing pengunjung melalui budaya yang kaya, sejarah, dan keindahan alam pulau-pulau ini, kami berusaha membuat setiap perjalanan menyenangkan dan penuh wawasan.') }}</p>
                <p>{{ $t('Passion kami adalah berbagi cerita lokal, tempat-tempat tersembunyi, dan pengalaman autentik, memastikan setiap tamu meninggalkan tempat ini dengan kenangan tak terlupakan dari Jawa dan Bali.') }}</p>
            </div>
            <div class="flex justify-center">
                <UNavigationMenu :items="contacts" variant="link" class="flex space-y-2" />
            </div>
            <AboutFaq id="faq" />
            <div class="flex justify-center">
                <UButton variant="soft" color="neutral" to="/" :label="$t('Kembali ke beranda')" icon="i-lucide-arrow-left" />
            </div>
        </div>
    </div>
</template>