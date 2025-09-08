<script setup lang="ts">
const config = useRuntimeConfig()

const contacts = [
    { icon: 'i-lucide-mail', href: `mailto:${config.public.owner.email}` },
    ...config.public.owner.socials,
]
useSeoMeta({
    title: $t('Tentang Kami - Trip Java Bali'),
    description: $t('Pelajari lebih lanjut tentang tim berpengalaman Trip Java Bali kami, yang berdedikasi memberikan pengalaman perjalanan yang berkesan dan tur yang dipersonalisasi di Jawa dan Bali.')
})
</script>
<template>
    <div class="relative flex flex-col items-center justify-start min-h-screen py-10 lg:py-14 px-4">
        <div class="max-w-2xl w-full space-y-6">
            <div class="flex flex-col items-center justify-center gap-3">
                <img src="/images/profile.png" alt="Avatar" class="w-32 h-32 rounded-full" />
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