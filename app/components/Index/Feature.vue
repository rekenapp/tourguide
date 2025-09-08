<script lang="ts" setup>
const config = useRuntimeConfig()

const features = [
    {
        icon: 'i-lucide-monitor-smartphone',
        title: $t('Pengetahuan Lokal yang Mendalam'),
        description: $t('Sejarah, budaya, dan spot-spot tersembunyi terbaik yang tidak ada di buku panduan mana pun.')
    },
    {
        icon: 'i-lucide-settings',
        title: $t('Koneksi Nyata dengan Orang Lokal'),
        description: $t('Bertemu langsung dengan penduduk lokal dan mendukung bisnis kecil mereka.')
    },
    {
        icon: 'i-lucide-book-open',
        title: $t('Aman dan Nyaman'),
        description: $t('Transportasi lokal yang andal plus bantuan kapan saja di lapangan.')
    },
    {
        icon: 'i-lucide-headphones',
        title: $t('Fleksibel dan Personal'),
        description: $t('Rancang tur sesuai dengan minat dan energi kamu.')
    }
]
</script>

<template>
    <UContainer class="py-10 lg:py-14 space-y-8">
        <Heading :title="$t('Kenapa Harus Kita?')" :description="$t('Temukan kenapa traveling bersama pandu wisata lokal membuat perjalanan kamu lebih berkesan.')" class="text-center" />
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
            <UCard v-for="feature in features" :key="feature.title" variant="soft" class="bg-muted/50 backdrop-blur-[2px] hover:bg-muted transition-all hover:-translate-y-0.5">
                <UBadge :icon="feature.icon" size="xl" class="p-3 rounded-lg" variant="subtle" />
                <div class="mt-5">
                    <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
                    <p class="mt-1 text-muted">{{ feature.description }}</p>
                    <UButton variant="link" class="mt-2 p-0!" trailing-icon="i-lucide-arrow-right" :label="$t('Pelajari lebih lanjut')" :href="`https://wa.me/${config.public.owner.phone}`" target="_blank" />
                </div>
            </UCard>
        </div>
    </UContainer>
</template>